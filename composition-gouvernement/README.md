Ce schéma décrit la composition officielle du Gouvernement en exercice avec les fonctions de ses membres telles que publiées au Journal officiel et leurs rattachements ministériels.

```json
{
    "metadata": {
        "titre": "",
        "description": "",
        "editeur": "",
        "licence": "",
        "date_publication": "",
        "date_mise_a_jour": "",
        "version": "",
        "contact": ""
    },
    "gouvernement": {
        "nom": "",
        "date_formation": "",
        "date_fin": null
    },
    "membres": [
        {
            "id": "",
            "ordre_protocolaire": 0,
            "isMember": true,
            "civilite": "",
            "prenom": "",
            "nom": "",
            "slug": "",
            "fonctions": [
                {
                    "id": "",
                    "rang": "",
                    "intitule_complet": "",
                    "date_nomination": "",
                    "rattachements_ministeriels": [
                        {
                            "ministere": null,
                            "intitule_partiel": ""
                        }
                    ]
                }
            ]
        }
    ]
}
```

## Contexte

La composition du Gouvernement est fixée par décret du Président de la République, sur proposition du Premier ministre, et publiée au Journal officiel. Elle détermine la liste des membres du Gouvernement, leurs fonctions et l'organisation des portefeuilles ministériels.

Ces données sont aujourd'hui publiées sur le site [info.gouv.fr](https://www.info.gouv.fr/composition-du-gouvernement) mais ne sont pas disponibles dans un format structuré et réutilisable. Ce schéma vise à combler ce manque en proposant un standard ouvert permettant à tout utilisateur d'exploiter la composition du Gouvernement sous forme de données structurées.

Le schéma prend en compte les spécificités institutionnelles françaises, notamment le fait qu'un même membre peut exercer plusieurs fonctions et qu'une même fonction peut être rattachée à plusieurs ministères de tutelle.

- Contributeur : Service d'information du Gouvernement (SIG)
- Schéma créé le : 22/04/2026
- Version : 0.1.0

## Périmètre

- Le schéma décrit **le Gouvernement en exercice** à un instant donné
- Il est remplacé à chaque changement dans le Gouvernement ou remaniement majeur
- Il gère les **fonctions multiples** : un membre peut cumuler plusieurs fonctions dans le même Gouvernement
- Il gère les **rattachements à plusieurs ministères de tutelle** : un intitulé complet d'une fonction au Journal officiel peut en réalité concerner plusieurs ministères de tutelle
- Il ne couvre pour le moment pas les biographies détaillées ni les cabinets ministériels actuels
- Il ne couvre pas l'historique des gouvernements précédents (ces données peuvent faire l'objet de schémas complémentaires)

## Cas d'usage

### Source de vérité pour les intitulés ministériels

Ce schéma constitue la **source de vérité unique** pour les intitulés officiels des ministères et des fonctions gouvernementales. Tout système qui a besoin de référencer un ministère (que ce soit pour publier un communiqué, alimenter un annuaire ou autre) doit s'appuyer sur ce schéma.

### Médias et veille institutionnelle

Vous pouvez alimenter automatiquement un organigramme interactif du Gouvernement, suivre les remaniements en temps réel, ou enrichir une base de données de personnalités politiques.

## Attributs

### Métadonnées (`metadata`)

| Attribut | Type | Obligatoire | Description | Exemple |
| --- | --- | --- | --- | --- |
| `titre` | chaîne de caractères | Oui | Titre du jeu de données | "Composition du Gouvernement de la République française" |
| `description` | chaîne de caractères | Oui | Description du contenu et du périmètre |  |
| `editeur` | chaîne de caractères | Oui | Organisme responsable de la publication | "SIG" |
| `licence` | chaîne de caractères | Oui | Licence applicable | "Licence Ouverte / Open Licence version 2.0" |
| `date_publication` | date (ISO 8601) | Oui | Date de première publication | "2026-02-27" |
| `date_mise_a_jour` | date (ISO 8601) | Oui | Date de dernière mise à jour |  |
| `version` | chaîne de caractères | Oui | Version sémantique du schéma | "4.0.0" |
| `contact` | chaîne de caractères | Non | Email de contact de l'éditeur | "[sig@pm.gouv.fr](mailto:sig@pm.gouv.fr)" |

### Gouvernement (`gouvernement`)

| Attribut | Type | Obligatoire | Description | Exemple |
| --- | --- | --- | --- | --- |
| `id` | UUID v4 | Oui | Identifiant unique universel du Gouvernement | "a1b5c3be-e5f6-4a9b-8a9d-9e1f3b3b1c5c" |
| `nom` | chaîne de caractères | Oui | Nom officiel du Gouvernement | "Gouvernement Sébastien Lecornu II" |
| `date_formation` | date (ISO 8601) | Oui | Date de formation, correspondant au décret publié au Journal officiel | "2026-02-26" |
| `date_fin` | date ou null | Oui | Date de fin de fonction (null tant que le Gouvernement est en exercice) |  |

### Personnalités (`personnalites[]`)

| Attribut | Type | Obligatoire | Description | Exemple |
| --- | --- | --- | --- | --- |
| `id` | UUID v4 | Oui | Identifiant unique universel de la personnalité | "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d" |
| `ordre_protocolaire` | nombre entier | Oui | Position dans l'ordre protocolaire du Gouvernement (0 = Premier ministre) |  |
| `isMember` | booléen | Oui | true si le membre est en exercice, false s'il a quitté le Gouvernement |  |
| `civilite` | chaîne de caractères | Oui | Civilité : M. ou Mme | "M." |
| `prenom` | chaîne de caractères | Oui | Prénom de la personnalité |  |
| `nom` | chaîne de caractères | Oui | Nom en majuscules, conformément à la typographie du Journal officiel | "LECORNU" |
| `slug` | chaîne de caractères | Oui | Identifiant URL unique, en minuscules avec tirets | "sebastien-lecornu" |

### Fonctions (`personnalites[].fonctions[]`)

Un membre peut exercer une ou plusieurs fonctions au sein du même Gouvernement. Chaque fonction correspond à un intitulé distinct au Journal officiel.

| Attribut | Type | Obligatoire | Description | Exemple |
| --- | --- | --- | --- | --- |
| `id` | UUID v4 | Oui | Identifiant unique universel de la fonction | "f1a2b3c4-d5e6-4f7a-8b9c-0d1e2f3a4b5c" |
| `rang` | énumération | Oui | Rang protocolaire de la fonction |  |
| `intitule_complet` | chaîne de caractères | Oui | Intitulé complet tel que publié au décret du Journal officiel | "Ministre déléguée, porte-parole du Gouvernement..." |
| `date_nomination` | date (ISO 8601) | Oui | Date de nomination correspondant au décret | "2026-02-26" |

L'attribut `rang` accepte les valeurs suivantes : `premier_ministre`, `premiere_ministre`, `ministre_detat`, `ministre`, `ministre_conseille`, `ministre_delegue`, `secretaire_detat`, `haut_commissaire`.

### Rattachements (`personnalites[].fonctions[].rattachements_ministeriels[]`)

Certaines fonctions impliquent un rattachement à un ou plusieurs ministères de tutelle. Ce tableau décompose l'intitulé officiel en autant de blocs que de ministères concernés.

| Attribut | Type | Obligatoire | Description | Exemple |
| --- | --- | --- | --- | --- |
| `ministere_id` | UUID v4 ou null | Oui | UUID du ministère de tutelle, issu de `ministeres.json`. Null pour le Premier ministre ou un ministre de plein exercice. | `"a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d"` |
| `intitule_partiel` | chaîne de caractères | Oui | Portion de l'intitulé officiel qui concerne ce ministère | "Ministre déléguée, Porte-parole du Gouvernement" |

## Référentiel des ministères (`ministeres.json`)

Les ministères du Gouvernement en exercice sont documentés dans un fichier séparé `ministeres.json`, publié sur [data.gouv.fr](https://www.data.gouv.fr/). Ce fichier est mis à jour en même temps que `composition-gouvernement.json` à chaque changement de gouvernement ou remaniement.

| Attribut | Type | Obligatoire | Description | Exemple |
| --- | --- | --- | --- | --- |
| `id` | UUID v4 | Oui | Identifiant unique universel du ministère. Attribué à la création du gouvernement. | `"a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d"` |
| `nom` | chaîne de caractères | Oui | Intitulé officiel du ministère tel que publié au Journal officiel | `"Ministère de l'Intérieur"` |

## Principes de mise à jour

Le fichier JSON est un **snapshot** : il reflète la composition du Gouvernement à un instant donné. Lors d'un changement de Gouvernement ou d'un remaniement, le fichier est remplacé intégralement. Les UUID des membres peuvent être conservés d'un Gouvernement à l'autre si la même personne est reconduite, garantissant ainsi la traçabilité des personnalités au fil des mandats.

## Données

Le fichier de données `composition-gouvernement.json` est disponible sur [data.gouv.fr](https://www.data.gouv.fr/).

## Contact

Service d'information du Gouvernement (SIG) - https://www.info.gouv.fr/contact/services-du-premier-ministre?service=275ba149-e350-4077-b47e-b46ab70ab9c3

## Licence

[Licence Ouverte / Open Licence version 2.0](https://www.etalab.gouv.fr/licence-ouverte-open-licence/)