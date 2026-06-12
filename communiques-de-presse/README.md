Ce schéma de données unifie les pratiques de création d'un communiqué de presse entre les entités du Gouvernement.

## Contexte

Chaque ministère et entité gouvernementale rédige et diffuse ses communiqués de presse selon ses propres pratiques internes.

Cette fragmentation engendre une multiplication de gabarits différents. Ces gabarits hétéroclites ne permettent pas une identification rapide de l'émetteur, ce qui représente un risque dans un contexte de manipulation des informations. Ces différents modèles compliquent l'archivage et rendent difficile toute exploitation centralisée en communication publique institutionnelle.

Dans le prolongement de la réforme de la communication de l'État et de la stratégie de marque État, le Service d'information du Gouvernement (SIG) propose ce schéma pour harmoniser l'ensemble des communiqués de presse émanant du Gouvernement et de ses entités.

## Référentiels associés

Ce schéma s'appuie sur les référentiels suivants, publiés sur data.gouv.fr :

- `personnalites.json` : référentiel des personnalités politiques. Seul l'UUID est embarqué dans le communiqué.
- `gouvernements-et-ministeres.json` : composition du Gouvernement en exercice et historique des gouvernements précédents. Contient également les ministères de chaque gouvernement (`gouvernements[].ministeres[]`). C'est à cet endroit qu'on résout les `ministere_id` référencés dans `emetteurs[]` et `contacts_presse[]`.
- `thematiques.json` : thématiques et sous-thématiques officielles.
- `missions-essentielles.json` : missions essentielles de l'État et leurs objets.

## Co-signature et bloc-marque

Un communiqué peut être émis par plusieurs ministères co-signataires. Le tableau `emetteurs[]` contient alors autant d'entrées que de signataires.

Règles d'affichage DSFR :

- Si `emetteurs[]` contient **un seul élément** → le bloc-marque DSFR affiche le libellé du ministère.
- Si `emetteurs[]` contient au moins deux **éléments** → le bloc-marque DSFR bascule sur **« GOUVERNEMENT »**.

Tous les émetteurs doivent partager le même `gouvernement_id`.

Le `nom` du ministère est figé au moment de la publication. Si un ministère est ultérieurement renommé, scindé ou supprimé, le `nom` conservé dans le communiqué garantit la lisibilité historique du document. La navigation pérenne par périmètre de politique publique passe par `thematiques[]`, pas par les ministères.

## Attributs

| Attribut | Type | Obligatoire | Description                                                                                                               | Exemple |
| --- | --- | --- |---------------------------------------------------------------------------------------------------------------------------| --- |
| `metadata.titre` | chaîne | Oui | Titre du jeu de données                                                                                                   | `"Schéma des communiqués de presse du Gouvernement français"` |
| `metadata.description` | chaîne | Oui | Description du contenu                                                                                                    |  |
| `metadata.editeur` | chaîne | Oui | Organisme responsable                                                                                                     | `"SIG"` |
| `metadata.licence` | chaîne | Oui | Licence applicable                                                                                                        | `"Licence Ouverte / Open Licence version 2.0"` |
| `metadata.date_publication` | date (ISO 8601) | Oui | Date de première publication                                                                                              | `"2026-02-27"` |
| `metadata.date_mise_a_jour` | date (ISO 8601) | Oui | Date de dernière mise à jour                                                                                              |  |
| `metadata.version` | chaîne | Oui | Version sémantique du schéma                                                                                              | `"0.2.0"` |
| `metadata.contact` | chaîne | Non | Email de contact de l'éditeur                                                                                             |  |
| `document.id` | UUID v4 | Oui | Identifiant unique universel du communiqué, généré automatiquement par info.gouv.fr                                       | `"b8c9d0e1-f2a3-4b4c-5d6e-7f8a9b0c1d2e"` |
| `document.version` | entier | Oui | Version du communiqué, incrémentée à chaque mise à jour                                                                   | `1` |
| `document.langue` | chaîne (ISO Alpha-2) | Oui | Langue du communiqué                                                                                                      | `"FR"` |
| `document.type` | énumération | Oui | `communique_de_presse` ou `dossier_de_presse`                                                                             | `"communique_de_presse"` |
| `document.titre` | chaîne | Oui | Titre du communiqué                                                                                                       | `"Le Gouvernement renforce la lutte contre le narcotrafic"` |
| `document.mots_cles[]` | tableau de chaînes | Non | Mots-clés libres                                                                                                          | `["narcotrafic", "sécurité"]` |
| `document.lieu_diffusion` | chaîne | Oui | Lieu d'émission. Par convention, `"Paris"` lorsqu'il y a plusieurs émetteurs                                              | `"Hôtel de Matignon"` |
| `document.date_diffusion` | date (ISO 8601) | Oui | Date de diffusion                                                                                                         | `"2026-03-27"` |
| `document.emetteurs[].ministere_id` | UUID v4 | Oui | ID du ministère émetteur, issu de `gouvernements-et-ministeres.json` (`gouvernements[].ministeres[]`)                     | `"f47ac10b-58cc-4372-a567-0e02b2c3d479"` |
| `document.emetteurs[].gouvernement_id` | UUID v4 | Oui | ID du gouvernement, issu de `gouvernements-et-ministeres.json`                                                            | `"a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d"` |
| `document.emetteurs[].nom` | chaîne | Oui | Intitulé du ministère figé au moment de la publication                                                                    | `"Ministère de l'Intérieur"` |
| `document.personnalites[]` | UUID v4 | Oui | ID de la personnalité, issu de `personnalites.json`                                                                       | `"a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d"` |
| `document.thematiques[]` | UUID v4 | Oui | ID de la thématique, issu de `thematiques.json` (min. 1)                                                                  | `"c3a1b2d4-e5f6-4789-abcd-ef0123456789"` |
| `document.sous_thematiques[]` | UUID v4 | Non | ID de la sous-thématique, issu de `thematiques.json`                                                                      | `"a7b8c9d0-e1f2-4a3b-4c5d-6e7f8a9b0c1d"` |
| `document.mission_id` | UUID v4 | Non | ID de la mission essentielle, issu de `missions-essentielles.json`                                                        | `"b7b9c9d0-e1f2-4a3b-4c5d-9b7f3a9b0d1d"` |
| `document.objet_id` | chaîne | Non | ID court de l'objet de communication interministérielle, issu de `missions-essentielles.json`                             | `"2F_narcotrafics"` |
| `document.contenu_markdown` | chaîne | Oui | Corps complet au format Markdown                                                                                          |  |
| `document.contenu_pdf.lien_telechargement` | URL | Oui | URL de téléchargement (HTTPS). Chaque version PDF sera récupérée par info.gouv.fr et mise à disposition sous son domaine. |  |
| `document.contenu_pdf.poids` | entier (octets) | Oui | Poids du fichier                                                                                                          | `2048000` |
| `document.contenu_pdf.checksum_sha256` | chaîne | Non | Empreinte SHA-256 du fichier en hexadécimal (64 caractères)                                                               | `"e3b0c44298fc1c149afbf4c8996fb924..."` |
| `document.contacts_presse[].civilite` | chaîne | Oui | `M.` ou `Mme`. `null` si service                                                                                          | `"Mme"` |
| `document.contacts_presse[].nom` | chaîne | Oui | Nom de la personne ou du service                                                                                          | `"Sophie Martin"` |
| `document.contacts_presse[].fonction` | chaîne | Non | Poste ou rôle                                                                                                             | `"Cheffe du bureau de presse"` |
| `document.contacts_presse[].email` | chaîne | Oui (1) | Format email valide                                                                                                       | `"sophie.martin@interieur.gouv.fr"` |
| `document.contacts_presse[].telephone` | chaîne | Oui (1) | Format `+33XXXXXXXXX` ou `0XXXXXXXXX` (9 chiffres après le préfixe)                                                       | `"+33149274927"` |
| `document.contacts_presse[].lien_formulaire` | URL | Non (1) | URL HTTPS d'un formulaire de contact                                                                                      |  |
| `document.contacts_presse[].adresse_physique` | chaîne | Non | Lieu où se rendre physiquement                                                                                            | `"Place Beauvau"` |
| `document.contacts_presse[].adresse_postale` | chaîne | Non | Adresse postale complète                                                                                                  | `"Place Beauvau, 75008 Paris"` |
| `document.pieces_jointes_annexes[].libelle` | chaîne (max 255) | Oui | Libellé concis                                                                                                            | `"Plan national - Mars 2026"` |
| `document.pieces_jointes_annexes[].lien_telechargement` | URL (HTTPS) | Oui | URL de téléchargement                                                                                                     |  |
| `document.pieces_jointes_annexes[].poids` | entier (octets) | Oui | Poids du fichier                                                                                                          | `2048000` |
| `document.pieces_jointes_annexes[].mimetype` | chaîne | Oui | Type MIME (RFC 6838)                                                                                                      | `"application/pdf"` |
| `document.pieces_jointes_annexes[].checksum_sha256` | chaîne | Non | Empreinte SHA-256 du fichier en hexadécimal (64 caractères)                                                               | `"e3b0c44298fc1c149afbf4c8996fb924..."` |

(1) Au moins un des 3 est obligatoire

L'algorithme de checksum est **SHA-256**. Un maximum de 4 pièces jointes est souhaitable.

## Markdown

| Format supportés | Exemple |
| --- | --- |
| Heading |  |
| Paragraph |  |
| Line break |  |
| Emphasis (bold & italic) |  |
| Blockquotes |  |
| Lists (ul & ol) |  |
| Horizontal rules |  |
| Links |  |
| Escaping Characters |  |

## Contact

Service d'information du Gouvernement (SIG) — https://www.info.gouv.fr/contact/services-du-premier-ministre?service=275ba149-e350-4077-b47e-b46ab70ab9c3

## Licence

Licence Ouverte / Open Licence version 2.0