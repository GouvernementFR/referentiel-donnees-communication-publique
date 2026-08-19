
Ce schéma décrit la composition officielle du Gouvernement en exercice : son identité, ses dates, la liste des UUID de personnalités qui le composent, **et la liste de ses ministères**.

Les détails des personnalités (identité, fonctions) font l’objet d’un référentiel séparé `personnalites.json` .

## Contexte

La composition d'un Gouvernement est fixée par décret du Président de la République, sur proposition du Premier ministre, et publiée au Journal officiel. Elle détermine la liste des membres du Gouvernement et la liste des ministères.

Ce schéma est pensé selon trois principes :

- **Historisation** : un tableau `gouvernements[]` permet de conserver l'historique des gouvernements successifs. Le gouvernement en exercice est celui dont `date_fin` est `null`.
- **Personnalités** : la civilité, le nom et les fonctions sont stockés dans `personnalites.json`.
- **Ministères** : les ministères sont placés directement dans le gouvernement auquel ils appartiennent, avec un UUID unique pour chaque ministère dans chaque gouvernement.

### Pourquoi un UUID unique par ministère et par gouvernement

Un même intitulé (« Ministère de l'Intérieur ») apparaissant dans trois gouvernements successifs donne **trois UUID différents** (un par gouvernement).

## Périmètre

- Le schéma décrit le Gouvernement en exercice **ainsi que les précédents. L’exhaustivité n’est pas encore disponible.**

## Cas d'usage

### Source de vérité pour le gouvernement courant

Pour identifier le Gouvernement en exercice, filtrer les entrées dont `date_fin` est `null`.

Les tableaux `personnalites[]` et `ministeres[]` de cette entrée donnent la liste à jour.

### Référencement dans les communiqués de presse

**Un communiqué de presse** référence ses émetteurs par le couple `gouvernement_id`, `ministere_id`.

## Attributs

| Attribut | Type | Obligatoire | Description | Exemple |
| --- | --- | --- | --- | --- |
| `metadata.titre` | chaîne | Oui | Titre du jeu de données | `"Composition des Gouvernements de la Vème République française"` |
| `metadata.description` | chaîne | Oui | Description du contenu |  |
| `metadata.editeur` | chaîne | Oui | Organisme responsable | `"SIG"` |
| `metadata.licence` | chaîne | Oui | Licence applicable | `"Licence Ouverte 2.0/Open Licence 2.0"` |
| `metadata.date_mise_a_jour` | date (ISO 8601) | Oui | Date de dernière mise à jour |  |
| `metadata.version` | chaîne | Oui | Version sémantique du schéma | `"0.2.0"` |
| `metadata.contact` | chaîne | Non | Email de contact de l'éditeur |  |
| `gouvernements[].id` | UUID v4 | Oui | Identifiant unique universel du gouvernement | `"a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d"` |
| `gouvernements[].nom` | chaîne | Oui | Nom officiel du Gouvernement | `"Gouvernement Sébastien Lecornu II"` |
| `gouvernements[].date_debut` | date (ISO 8601) | Oui | Date de formation correspondant au décret | `"2026-02-26"` |
| `gouvernements[].date_fin` | date (ISO 8601) | Non | Date de fin (`null` tant que le Gouvernement est en exercice) |  |
| `gouvernements[].ministeres[].id` | UUID v4 | Oui | Identifiant unique universel du ministère dans ce gouvernement | `"f47ac10b-58cc-4372-a567-0e02b2c3d479"` |
| `gouvernements[].ministeres[].nom` | chaîne | Oui | Intitulé officiel du ministère | `"Ministère de l'Intérieur"` |
| `gouvernements[].ministeres[].ordre_ministere` | entier | Oui | Position du ministère dans la liste du gouvernement (1 = Premier ministre) | `1` |
| `gouvernements[].ministeres[].succede_ministere_id[]` | tableau d'UUID v4 | Oui, null si création d’un nouveau ministère qui n’a pas de parent | Identifiant unique universel du ou des ministères auxquels ce ministère succède (renommage, création, fusion, scission) | `["f47ac10b-58cc-4372-a567-0e02b2c3d479"]` |
| `gouvernements[].ministeres[].personnalites[].personnalite_id` | UUID v4 | Oui | UUID de la personnalité, issu de `personnalites.json` | `"a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d"` |
| `gouvernements[].ministeres[].personnalites[].ordre_protocolaire` | entier | Oui | Position globale dans le gouvernement (1 = Premier ministre) | `1` |
| `gouvernements[].ministeres[].personnalites[].ordre_ministeriel` | entier | Oui | Position au sein du ministère de tutelle (1 = ministre principal) | `1` |

## Données

Le fichier `gouvernements-et-ministeres.json` est disponible sur data.gouv.fr.

## Contact

[Service d'information du Gouvernement (SIG)](https://www.info.gouv.fr/contact/services-du-premier-ministre?service=275ba149-e350-4077-b47e-b46ab70ab9c3)