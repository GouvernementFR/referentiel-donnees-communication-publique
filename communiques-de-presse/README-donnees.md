# Communiqués de presse du Gouvernement — `communiques.jsonl`

Ce jeu de données contient l'ensemble des communiqués de presse publiés par les ministères et entités du Gouvernement sur [info.gouv.fr](https://www.info.gouv.fr/).

## Contexte

Chaque ministère et entité gouvernementale publie ses communiqués de presse sur [info.gouv.fr](https://www.info.gouv.fr/). Ce jeu de données centralise l'ensemble de ces publications dans un format structuré et réutilisable, conforme au schéma officiel défini par le Service d'information du Gouvernement (SIG).

Chaque communiqué est rattaché à des thématiques officielles, à des personnalités du Gouvernement et à une entité émettrice, ce qui permet de filtrer, regrouper et suivre les publications par sujet ou par ministère.

- Contributeur : Service d'information du Gouvernement (SIG)
- Mise à jour : en continu, à chaque publication sur [info.gouv.fr](http://info.gouv.fr/)
- Version : 0.1.0

## Périmètre

- Ce jeu de données couvre les communiqués de presse et dossiers de presse publiés sur [info.gouv.fr](https://www.info.gouv.fr/) depuis l'ouverture du service
- Il est mis à jour automatiquement à chaque nouvelle publication
- Il référence les personnalités par leur UUID issu de `composition-gouvernement.json` et les thématiques par leur UUID issu de `thematiques.json`
- Il ne couvre pas les communiqués publiés uniquement sur les sites ministériels propres

## Format

Le fichier est au format JSONL.

## Attributs

| Attribut | Type | Obligatoire | Description | Exemple |
| --- | --- | --- | --- | --- |
| `version` | entier | Oui | Version du communiqué, incrémentée à chaque mise à jour | 1 |
| `langue` | chaîne (ISO Alpha-2) | Non. 
FR si *null*  | Langue du communiqué | "FR" |
| `type_document` | énumération | Oui | Type de document : `communique_de_presse` ou `dossier_de_presse` | "communique_de_presse" |
| `mots_cles` | tableau de chaînes | Non | Mots-clés libres associés au communiqué | ["narcotrafic"] |
| `lieu_diffusion` | chaîne | Oui | Lieu d'émission | "Hôtel de Matignon" |
| `date_diffusion` | date (ISO 8601) | Oui | Date de diffusion | "2026-03-27" |
| `contenu` | chaîne | Oui | Corps du communiqué au format Markdown |  |
| `personnalites` | tableau d'UUID | Non | Personnalités associées, référencées par UUID (min. 1) |  |
| `thematiques` | tableau d'UUID | Oui | Thématiques associées, référencées par UUID (min. 1) |  |
| `sous_thematiques` | tableau d'UUID | Non | Sous-thématiques associées, référencées par UUID |  |
| `mission` | objet | Non | Mission essentielle associée, référencée par UUID issu de `missions-essentielles.json` |  |
| `objet` | objet | Non | Objet de communication interministérielle associé, référencé par l’ID issu de `missions-essentielles.json` |  |
| `contacts_presse` | tableau d'objets | Non | Contacts presse du communiqué (0 à n) |  |
| `pieces_jointes` | tableau d'objets | Non | Pièces jointes (max 4, 10 Mo recommandé) — champs : `libelle`, `lien`, `poids`, `mimetype` |  |

## Référentiels associés

Ce jeu de données s'appuie sur trois autres référentiels publiés sur [data.gouv.fr](http://data.gouv.fr/) :

- `thematiques.json` : référentiel des thématiques et sous-thématiques officielles de l'action gouvernementale ;
- `composition-gouvernement.json` : personnalités officielles composants le Gouvernement en exercice ;
- `missions-essentielles.json` : missions et objets de communications interministérielles.

Les personnalités, les thématiques, les missions essentielles et leurs objets de communications interministérielles sont embarquées dans chaque communiqué **uniquement par leur UUID**. Pour obtenir le détail complet (libellé, fonctions, rattachements), il convient de croiser avec les référentiels correspondants.

## Exemple

```json
{
  "version": 1,
  "langue": null,
  "type_document": "communique_de_presse",
  "mots_cles": ["narcotrafic", "sécurité intérieure", "police nationale"],
  "lieu_diffusion": "Hôtel de Matignon",
  "date_diffusion": "2026-03-27",
  "contenu": "## Le Gouvernement renforce la lutte contre le narcotrafic\n\nLe ministre de l'Intérieur, M. Laurent NUÑEZ, annonce la mise en place d'un plan national de lutte contre le narcotrafic.\n\n### Trois axes prioritaires\n\n- Renforcement des effectifs de police et de gendarmerie sur les points de passage stratégiques\n- Coopération internationale accrue avec les pays d'origine et de transit\n- Création d'une cellule interministérielle de coordination\n\nCe plan s'inscrit dans la continuité des engagements pris par le Gouvernement en matière de sécurité intérieure.",
  "personnalites": [
    { "id": "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d" }
  ],
  "thematiques": [
    { "id": "c3a1b2d4-e5f6-4789-abcd-ef0123456789" }
  ],
  "sous_thematiques": [
    { "id": "a7b8c9d0-e1f2-4a3b-4c5d-6e7f8a9b0c1d" }
  ],
  "mission": { "id": "53c18ecb-32f6-416f-8265-edc02a9bdd5e" },
  "objet": { "id": "1A_engagement_citoyen" },
  "contacts_presse": [
    {
      "civilite": "Mme",
      "contact_privilegie": "Sophie Martin",
      "fonction": "Cheffe du bureau de presse",
      "email": "sophie.martin@interieur.gouv.fr",
      "telephone": "+33 1 49 27 49 27",
      "lien_formulaire": null,
      "adresse_physique": "Place Beauvau, 75008 Paris"
    },
    {
      "civilite": null,
      "contact_privilegie": "Service presse du Ministère de l'Intérieur",
      "fonction": null,
      "email": "service-presse@interieur.gouv.fr",
      "telephone": "+33 1 42 75 80 00",
      "lien_formulaire": null,
      "adresse_physique": null
    }
  ],
  "pieces_jointes": [
    {
      "libelle": "Plan national de lutte contre le narcotrafic - Mars 2026",
      "lien": "https://www.info.gouv.fr/upload/media/2026/03/plan-narcotrafic-2026.pdf",
      "poids": 2048000,
      "mimetype": "application/pdf"
    }
  ]
}
```

## Schéma

Le schéma officiel au format JSON Schema (draft-07) est documenté dans `README-schema.md` et publié sur [schema.data.gouv.fr](https://schema.data.gouv.fr/sig/schema-communiques-presse-gouvernement/schema.json).

## Contact

Service d'information du Gouvernement (SIG)  - https://www.info.gouv.fr/contact/services-du-premier-ministre?service=275ba149-e350-4077-b47e-b46ab70ab9c3

## Licence

[Licence Ouverte / Open Licence version 2.0](https://www.etalab.gouv.fr/licence-ouverte-open-licence/)