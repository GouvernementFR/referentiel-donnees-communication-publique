Ce référentiel décrit les personnalités politiques exerçant ou ayant exercé une fonction au sein du Gouvernement, ainsi que leurs fonctions historisées. Il sert de **source de vérité unique** pour identifier une personnalité par son UUID stable, indépendamment des changements de gouvernement.

## Contexte

Ce fichier contient les personnalités politiques des gouvernements successifs de la Ve République. Il n’est pas encore exhaustif.

## Périmètre

- Une personnalité est créée à sa première nomination dans un gouvernement
- Son UUID ne change jamais, même si elle revient dans un gouvernement ultérieur
- Le tableau `fonctions[]` historise toutes les fonctions exercées, chacune rattachée à un gouvernement
- Les fonctions actives sont celles dont `date_fin` est `null`
- Ce référentiel ne couvre pas les cabinets ministériels

## Cas d'usage

### Source de vérité pour l'identité

Tout système qui mentionne une personnalité (communiqué, agenda, discours) référence son UUID issu de ce fichier. La personnalité reste identifiable même si elle change de fonction ou si le gouvernement change.

### Historisation des fonctions

Le tableau `fonctions[]` permet de retracer le parcours gouvernemental d'une personnalité. Chaque fonction est rattachée à un `gouvernement_id` issu de `gouvernements-et-ministeres.json`.

## Attributs

| Attribut | Type | Obligatoire | Description | Exemple |
| --- | --- | --- | --- | --- |
| `metadata.titre` | chaîne | Oui | Titre du jeu de données | `"Personnalités politiques"` |
| `metadata.description` | chaîne | Oui | Description du référentiel |  |
| `metadata.editeur` | chaîne | Oui | Organisme responsable | `"SIG"` |
| `metadata.licence` | chaîne | Oui | Licence applicable | `"Licence Ouverte 2.0/Open Licence 2.0"` |
| `metadata.date_mise_a_jour` | date (ISO 8601) | Oui | Date de dernière mise à jour |  |
| `metadata.version` | chaîne | Oui | Version sémantique du schéma | `"0.1.0"` |
| `metadata.contact` | chaîne | Non | Email de contact de l'éditeur |  |
| `personnalites[].id`  | UUID v4 | Oui | Identifiant unique universel de la personnalité, stable à travers les gouvernements | `"a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d"` |
| `personnalites[].civilite` | chaîne | Oui | `M.` ou `Mme` | `"M."` |
| `personnalites[].prenom` | chaîne | Oui | Prénom | `"Sébastien"` |
| `personnalites[].nom` | chaîne | Oui | Nom en majuscules (typographie JO) | `"LECORNU"` |
| `personnalites[].fonctions` | liste de fonctions | Oui | Historique des fonctions exercées (1 à n) |  |
| `personnalites[].fonctions[].id` | UUID v4 | Oui | Identifiant unique universel de la fonction | `"f1a2b3c4-d5e6-4f7a-8b9c-0d1e2f3a4b5c"` |
| `personnalites[].fonctions[].gouvernement_id` | UUID v4 | Oui | UUID du gouvernement dans lequel la fonction est exercée, issu de `gouvernements-et-ministeres.json` | `"a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d"` |
| `personnalites[].fonctions[].ministere_id` | UUID v4 ou null | Oui | UUID du ministère de tutelle, issu de `gouvernements-et-ministeres.json` (`gouvernements[].ministeres[]`). `null` pour le PM ou un ministre de plein exercice. | `"a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d"` |
| `personnalites[].fonctions[].intitule_complet` | chaîne | Oui | Intitulé complet tel que publié au JO | `"Ministre déléguée, porte-parole du Gouvernement"` |
| `personnalites[].fonctions[].intitule_partiel` | chaîne | Oui | Portion relative au ministère de tutelle | `"Porte-parole du Gouvernement"` |
| `personnalites[].fonctions[].ordre_protocolaire` | entier | Oui | Position globale dans le gouvernement (1 = Premier ministre) | `1` |
| `personnalites[].fonctions[].ordre_ministeriel` | entier | Oui | Position au sein du ministère de tutelle (1 = ministre principal) | `1` |
| `personnalites[].fonctions[].date_debut` | date (ISO 8601) | Oui | Date de nomination correspondant au décret | `"2026-02-26"` |
| `personnalites[].fonctions[].date_fin` | date (ISO 8601) | Oui | Date de fin de fonction (`null` si fonction en cours) | `null` |

## Données

Le fichier `personnalites.json` est disponible sur data.gouv.fr.

## Contact

[Service d'information du Gouvernement (SIG)](https://www.info.gouv.fr/contact/services-du-premier-ministre?service=275ba149-e350-4077-b47e-b46ab70ab9c3)