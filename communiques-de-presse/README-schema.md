Ce schéma de données vise à unifier les pratiques de création d'un communiqué de presse entre les entités du Gouvernement.

## Contexte

Aujourd'hui, chaque ministère et entité gouvernementale rédige et diffuse ses communiqués de presse selon ses propres pratiques internes.

Cette fragmentation engendre une multiplication de gabarits différents. Ces gabarits hétéroclites ne permettent pas une identification rapide de l'émetteur, ce qui représente un risque dans un contexte de manipulation des informations. Aussi, ces différents modèles complique l'archivage et rend difficile toute exploitation centralisée en communication publique institutionnelle.

Dans le prolongement de la réforme de la communication de l'État et de la stratégie de marque État, le Service d'information du Gouvernement (SIG) propose ce schéma pour harmoniser l'ensemble des communiqués de presse émanent du Gouvernement et ses entités. Ce schéma de donnée vise à garantir l'homogénéité et l'authenticité des documents diffusés auprès des citoyens et professionnels des médias et de la presse.

Il s'inscrit dans une démarche de coopération entres ministères et d'inter-opérabilité des données à caractère publiques, en lien avec le Design Système de l'État (DSFR), la plateforme [info.gouv.fr](http://info.gouv.fr/), et la marque de l'État.

## Finalité

Ce schéma permet de structurer la construction des communiqués de presse des ministères et leurs services.

## Contribution

Les ministères partenaires peuvent contribuer à l'enrichissement de ce schéma de données en contactant les équipes du Service d'information du Gouvernement.

## Référentiels associés

Ce schéma de données se basent sur d'autres référentiels de communication publique, stockées dans un dépôt [data.gouv.fr](http://data.gouv.fr/) au format .jsonl, pour associer chaque communiqué de presse en vue de les filtrer, les regrouper ou s'abonner à certaines catégories :

- `thematiques.json` : liste des thématiques et sous-thématiques (ex : armées) ;
- `missions-essentielles.json` : listes des missions essentielles de l'État et leurs objets de communication interministérielle ;
- `composition-gouvernement.json` : composition officielle du Gouvernement en exercice. Seul l'UUID de chaque personnalité est embarqué dans le communiqué. Pour le détail complet (fonctions, rattachements ministériels, ordre protocolaire), consulter le référentiel complet ;
- `ministeres.json` : listes des ministères en exercices et leurs UUID.

## Structure des données

### Schéma

Pour accéder aux données brutes des communiqués publiés, voir `README-donnees.md`.

### Attributs du communiqué de presse

### Identification

| Attribut | Type | Obligatoire | Description | Exemple |
| --- | --- | --- | --- | --- |
| `version` | entier | Oui | Version du communiqué, incrémentée à chaque mise à jour | 1 |
| `langue` | chaîne (ISO 3166 Alpha-2) | Non | Langue du communiqué | "FR" |
| `type_document` | énumération | Oui | Type de document | "communique_de_presse" |
| `mots_cles` | tableau de chaînes | Non | Mots-clés libres associés au communiqué | ["narcotrafic", "sécurité intérieure"] |
| `lieu_diffusion` | chaîne | Oui | Lieu d'émission | "Hôtel de Matignon" |
| `date_diffusion` | date (ISO 8601) | Oui | Date de diffusion | "2026-03-27" |

L'attribut `type_document` accepte les valeurs suivantes : `communique_de_presse`, `dossier_de_presse`.

### Composition du Gouvernement (`personnalites[]`)

Personnalités du Gouvernement signataires ou associées au communiqué. Référencées par leur UUID issu de `composition-gouvernement.json` sur [data.gouv.fr](http://data.gouv.fr/).

| Attribut | Type | Obligatoire | Description | Exemple |
| --- | --- | --- | --- | --- |
| `id` | UUID v4 | Non | UUID de la personnalité | "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d" |

### Thématiques (`thematiques[]`)

Thématiques officielles de l'action gouvernementale associées au communiqué. Référencées par leur UUID issu de `thematiques.json` sur [data.gouv.fr](http://data.gouv.fr/). Au moins une thématique est obligatoire.

| Attribut | Type | Obligatoire | Description | Exemple |
| --- | --- | --- | --- | --- |
| `id` | UUID v4 | Oui | UUID de la thématique | "c3a1b2d4-e5f6-4789-abcd-ef0123456789" |

### Sous-thématiques (`sous_thematiques[]`)

Sous-thématiques officielles associées. Optionnelles mais recommandées pour un classement plus fin.

| Attribut | Type | Obligatoire | Description | Exemple |
| --- | --- | --- | --- | --- |
| `id` | UUID v4 | Non | UUID de la sous-thématique | "a7b8c9d0-e1f2-4a3b-4c5d-6e7f8a9b0c1d" |

### Mission (`mission`)

Mission essentielle de l'État associée au communiqué. Optionnelle. Référencée par son UUID issu de `missions-essentielles.json` sur [data.gouv.fr](http://data.gouv.fr/).

| Attribut | Type | Obligatoire | Description | Exemple |
| --- | --- | --- | --- | --- |
| `id` | UUID v4 | Non | UUID de la mission essentielle | "b7b9c9d0-e1f2-4a3b-4c5d-9b7f3a9b0d1d" |

### Objet (`objet`)

Objet de communication interministérielle associé au communiqué. Optionnel. Référencé par son UUID issu de `missions-essentielles.json` sur [data.gouv.fr](http://data.gouv.fr/).

| Attribut | Type | Obligatoire | Description | Exemple |
| --- | --- | --- | --- | --- |
| `id` | chaîne de caractères | Non | ID de l'objet | "1A_engagement_citoyen" |

### Contenu

| Attribut | Type | Obligatoire | Description |
| --- | --- | --- | --- |
| `contenu` | chaîne de caractères | Oui | Corps complet du communiqué au format Markdown .md |

### Contact presse (`contacts_presse[]`)

Les contacts presse sont optionnels. Chaque contact peut être une personne nominative ou un service (bureau de presse). Au moins un moyen de contact (email, téléphone ou lien formulaire) est obligatoire par contact.

| Attribut | Type | Obligatoire | Contraintes | Description | Exemple |
| --- | --- | --- | --- | --- | --- |
| `civilite` | chaîne de caractères | Non | M. ou Mme. Laisser vide si c'est un service. | Titre de civilité | "Mme" |
| `contact_privilegie` | chaîne de caractères | Oui | Nom de la personne ou du service | Nom du contact | "Laurence Dupond" |
| `fonction` | chaîne de caractères | Non | 1 par contact | Poste ou rôle du contact | "Chargée des relation presse" |
| `email` | chaîne de caractères | Oui* | Format email valide. *Au moins un moyen de contact obligatoire. | Adresse email | "[presse@interieur.gouv.fr](mailto:presse@interieur.gouv.fr)" |
| `telephone` | chaîne de caractères | Non | Format 06... ou +33... | Numéro de téléphone | "+33 1 49 27 49 27" |
| `lien_formulaire` | URL | Non | URL valide, protocole HTTPS. | Lien vers un formulaire de contact en ligne |  |
| `adresse_physique` | chaîne de caractères | Non |  | Adresse postale | "Place Beauvau, 75008 Paris" |

### Pièces jointes (`pieces_jointes[]`)

Optionnelles. Maximum 4 pièces jointes. Favoriser des fichiers de 10 Mo maximum.

| Attribut | Type | Obligatoire | Description | Exemple |
| --- | --- | --- | --- | --- |
| `libelle` | chaîne (max 255 car.) | Oui | Libellé concis et informatif de la pièce jointe | "Dossier de presse - Narcotrafic" |
| `lien` | URL (HTTPS) | Oui | URL de téléchargement |  |
| `poids` | entier (octets) | Oui | Poids du fichier en octets | 2048000 |
| `mimetype` | chaîne | Oui | Type MIME au format type/sous-type (RFC 6838) | "application/pdf" |

## Contact

Service d'information du Gouvernement (SIG)  - https://www.info.gouv.fr/contact/services-du-premier-ministre?service=275ba149-e350-4077-b47e-b46ab70ab9c3

## Licence

[Licence Ouverte / Open Licence version 2.0](https://www.etalab.gouv.fr/licence-ouverte-open-licence/)