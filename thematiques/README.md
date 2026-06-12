Ce schéma décrit le référentiel officiel des thématiques et sous-thématiques de l'action du Gouvernement, tel qu'il structure la publication des contenus sur le site info.gouv.fr. Il est alimenté par info.gouv.fr.

## Contexte

L'action du Gouvernement s'organise autour de **grandes thématiques de politiques publiques.**

Ces thématiques constituent le cadre officiel pour l'ensemble des communications gouvernementales : actualités, communiqués de presse, dossiers de presse, discours, rapports et autres documents presses publiées sur info.gouv.fr.

Chaque thématique se décline en sous-thématiques. Par exemple, la thématique « Agriculture » comprend les sous-thématiques « Alimentation » et « Production et filières ».

Ce référentiel a vocation à être **le vocabulaire contrôlé de référence** pour le classement thématique des contenus gouvernementaux.

## Périmètre

- Le schéma décrit les **thématiques officielles** de l'action gouvernementale et leurs sous-thématiques
- Chaque thématique et sous-thématique possède un UUID stable, attribué à sa création
- Ce référentiel est **pérenne** : il peut évoluer mais indépendamment du calendrier politique et des gouvernements successifs
- Il couvre le classement des contenus du site info.gouv.fr et peut servir de base à toute indexation thématique de l'action publique
- Il ne couvre pas les étiquettes libres, mots-clés éditoriaux ou taxonomies propres à d'autres sites ministériels

## Cas d'usage

### Classement des documents presse par les ministères

Ce référentiel est la **source de vérité unique** pour le classement thématique des contenus gouvernementaux. Par exemple, lorsqu'un ministère publie un communiqué de presse sur info.gouv.fr, il rattache son communiqué à une thématique (et optionnellement à des sous-thématiques) en utilisant les UUID correspondants. Cela garantit un classement homogène de tous les contenus, quel que soit le ministère émetteur.

### Navigation et recherche sur info.gouv.fr

Les thématiques structurent les contenus et la navigation principale du site et permettent aux citoyens de retrouver l'ensemble des contenus relatifs à un domaine de politique publique.

### Veille thématique

Un citoyen ou un média peut s'abonner aux thématiques qui l'intéressent pour suivre automatiquement les publications d'info.gouv.fr sur un sujet donné.

### Inter-opérabilité

Toute administration, collectivité ou acteur tiers souhaitant indexer des contenus relatifs à l'action gouvernementale peut s'appuyer sur ce vocabulaire contrôlé pour garantir la compatibilité avec les données publiées sur info.gouv.fr.

## Attributs

| Attribut | Type | Obligatoire | Description | Exemple |
| --- | --- | --- | --- | --- |
| `metadata.titre` | chaîne de caractères | Oui | Titre du jeu de données | "Référentiel des thématiques info.gouv.fr" |
| `metadata.description` | chaîne de caractères | Oui | Description du référentiel et de son périmètre |  |
| `metadata.editeur` | chaîne de caractères | Oui | Organisme responsable de la publication | "SIG" |
| `metadata.licence` | chaîne de caractères | Oui | Licence applicable | "Licence Ouverte v2.0" |
| `metadata.date_mise_a_jour` | date (ISO 8601) | Oui | Date de dernière mise à jour |  |
| `metadata.version` | chaîne de caractères | Oui | Version sémantique du schéma | "1.0.0" |
| `thematiques[].id` | UUID v4 | Oui | Identifiant unique universel de la thématique. | "c3a1b2d4-e5f6-4789-abcd-ef0123456789" |
| `thematiques[].libelle` | chaîne de caractères | Oui | Libellé officiel de la thématique tel qu'il apparaît dans la navigation du site | "Sécurité" |
| `thematiques[].sous_thematiques[].id` | UUID v4 | Oui | Identifiant unique universel de la sous-thématique. Attribué à la création, ne change jamais. | "d4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a" |
| `thematiques[].sous_thematiques[].libelle` | chaîne de caractères | Oui | Libellé officiel de la sous-thématique | "Retraites" |

## Stabilité des identifiants

Les UUID sont attribués à la création de chaque thématique ou sous-thématique par le SIG. Ils ne sont jamais modifiés ni réattribués, y compris en cas de changement de libellé.

## Données

Le fichier de données `thematiques.json` est disponible sur data.gouv.fr.

## Contact

Service d'information du Gouvernement (SIG) - https://www.info.gouv.fr/contact/services-du-premier-ministre

## Licence

Licence Ouverte / Open Licence version 2.0