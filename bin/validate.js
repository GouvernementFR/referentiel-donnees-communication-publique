const Ajv2020 = require("ajv/dist/2020");
const addFormats = require("ajv-formats");
const addKeywords = require("ajv-keywords");
const fs = require("fs");
const path = require("path");

// ----------------------
// Parse CLI named arguments
// ----------------------
const argv = {};
for (let i = 2; i < process.argv.length; i++) {
  if (process.argv[i].startsWith("--")) {
    const key = process.argv[i].substring(2);
    const value = process.argv[i + 1];
    argv[key] = value;
    i++;
  }
}

const schemaPath = argv.schema;
const dataPathOrDir = argv.data;
const reportPath = argv.report;

if (!schemaPath) {
  console.error(
    "Usage: node src/validate.js --schema schema.json [--data data.json|directory] [--report report.json]"
  );
  process.exit(1);
}

// ----------------------
// Helpers
// ----------------------
function loadJson(filePath) {
  const absolutePath = path.resolve(filePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Le fichier n'existe pas : ${absolutePath}`);
  }
  return JSON.parse(fs.readFileSync(absolutePath, "utf-8"));
}

function listFiles(dirPath) {
  const absoluteDir = path.resolve(dirPath);
  if (!fs.existsSync(absoluteDir)) throw new Error(`Le dossier n'existe pas : ${absoluteDir}`);
  return fs.readdirSync(absoluteDir)
    .filter(f => f.endsWith(".json") || f.endsWith(".jsonl"))
    .map(f => path.join(absoluteDir, f));
}

// ----------------------
// Rapport structuré
// ----------------------
const report = {
  schema: schemaPath,
  data: dataPathOrDir || null,
  valid: true,
  timestamp: new Date().toISOString(),
  files: []
};

let schema;
let validate;

// ----------------------
// Chargement du schéma
// ----------------------
try {
  schema = loadJson(schemaPath);
} catch (err) {
  report.valid = false;
  report.files.push({
    phase: "load-schema",
    file: schemaPath,
    valid: false,
    errors: [err.message]
  });
}

// ----------------------
// Initialisation AJV
// ----------------------
const ajv = new Ajv2020({ strict: false, allErrors: true });
addFormats(ajv);
//addKeywords(ajv, ["$data"]); // support $data

// ----------------------
// Compilation du schéma
// ----------------------
if (report.valid) {
  try {
    validate = ajv.compile(schema);
  } catch (err) {
    report.valid = false;
    report.files.push({
      phase: "compile-schema",
      file: schemaPath,
      valid: false,
      errors: [err.message]
    });
  }
}

// ----------------------
// Validation des données si fournies
// ----------------------
if (report.valid && dataPathOrDir) {
  let filesToValidate = [];
  const absoluteDataPath = path.resolve(dataPathOrDir);
  const stat = fs.statSync(absoluteDataPath);

  if (stat.isDirectory()) {
    filesToValidate = listFiles(absoluteDataPath);
  } else if (stat.isFile()) {
    filesToValidate = [absoluteDataPath];
  } else {
    console.error("Le paramètre --data doit être un fichier JSON ou un répertoire.");
    process.exit(1);
  }

  filesToValidate.forEach(file => {
    const fileReport = { file, valid: true, errors: [] };

    try {
      if (file.endsWith(".jsonl")) {
        const lines = fs.readFileSync(file, "utf-8").split("\n").filter(Boolean);
        lines.forEach((line, index) => {
          try {
            const obj = JSON.parse(line);
            const valid = validate(obj);
            if (!valid) {
              fileReport.valid = false;
              fileReport.errors.push({ line: index + 1, ajvErrors: validate.errors });
            }
          } catch (err) {
            fileReport.valid = false;
            fileReport.errors.push({ line: index + 1, parseError: err.message });
          }
        });
      } else {
        const data = loadJson(file);
        const valid = validate(data);
        if (!valid) {
          fileReport.valid = false;
          fileReport.errors = validate.errors;
        }
      }
    } catch (err) {
      fileReport.valid = false;
      fileReport.errors.push(err.message);
    }

    if (!fileReport.valid) {
      report.valid = false;
    }

    report.files.push(fileReport);
  });
}

// ----------------------
// Écriture du rapport JSON si demandé
// ----------------------
if (reportPath) {
  const outputPath = path.resolve(reportPath);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
}

// ----------------------
// Sortie console
// ----------------------
if (report.valid) {
  console.log("Validation successful");
  process.exit(0);
} else {
  console.error("Validation failed");
  console.error(JSON.stringify(report.files, null, 2));
  process.exit(1);
}
