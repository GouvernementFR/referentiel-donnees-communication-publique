Ce jeu de données décrit les six missions essentielles de l'État, telles que définies par le Service d'information du Gouvernement (SIG). Chaque mission se décline en objets de communication interministérielle.

## Contexte

Les six missions essentielles de l'État sont six grands champs d'action construits à partir des attentes des Français et en lien avec les directions de communication des ministères. Elles servent à :

- Donner aux citoyens une grille de lecture simple de l'action publique
- Offrir aux communicants de l'État un cadre commun pour formuler leurs messages
- Structurer une expression cohérente de la marque État sur le long terme

Elles se matérialisent dans un livre de marque partagé à l'ensemble de la filière communication de l'État, qui explique comment l'État agit et pour répondre à quelles attentes des Français.

L'objectif est de permettre aux Français d'identifier dans leur quotidien comment l'État remplit ses six missions.

## Périmètre

- Ce référentiel couvre les 6 missions essentielles de l'État et leurs objets de communication interministérielle
- Les UUID sont attribués à la création et ne changent jamais
- Les missions et les objets ne sont **pas liés techniquement** : un objet référence l'ID court de sa mission parente (`id_mission_rattachee`) sans contrainte technique forte, afin de préserver la flexibilité du référentiel
- Ce référentiel évolue indépendamment du calendrier politique mais est sujet aux changements de gouvernement dans le cadre de la création ou suppression de ministères

## Les 6 missions essentielles

| # | ID | Libellé | Couleur | Hex |
| --- | --- | --- | --- | --- |
| 1 | `1_organiser` | Organiser le fonctionnement du pays, la vie démocratique et établir la loi | Bleu Océan | `#3476cb` |
| 2 | `2_proteger` | Protéger les citoyens, leur santé et leur cadre de vie | Rose Guimauve | `#c1498d` |
| 3 | `3_accompagner` | Accompagner efficacement les citoyens au quotidien et garantir l'accès aux services publics | Orange Caramel | `#fd9938` |
| 4 | `4_consolider` | Consolider le pays et préparer son avenir : investir pour le bien commun, former les citoyens de demain, accompagner les transitions | Vert Émeraude | `#3d816d` |
| 5 | `5_favoriser` | Favoriser une économie forte et durable pour le pays | Jaune Moutarde | `#f2ca46` |
| 6 | `6_defendre` | Défendre et promouvoir la France sur la scène internationale | Ocre Cannelle | `#ad6055` |

## Référentiel des ministères

Les UUID des ministères sont issus de `gouvernements-et-ministeres.json` (`gouvernements[].ministeres[]`).

## Les objets de communication interministérielle

| ID objet | Libellé | Mission rattachée | Rôle | Ministère |
| --- | --- | --- | --- | --- |
| `1A_engagement_citoyen` | L'engagement citoyen et les campagnes d'incitation au vote | `1_organiser` | Menant | Premier ministre |
| `1A_engagement_citoyen` | L'engagement citoyen et les campagnes d'incitation au vote | `1_organiser` | Concourant | Ministère de l'Intérieur |
| `1A_engagement_citoyen` | L'engagement citoyen et les campagnes d'incitation au vote | `1_organiser` | Concourant | Ministère des Sports, de la Jeunesse et de la Vie associative |
| `1A_engagement_citoyen` | L'engagement citoyen et les campagnes d'incitation au vote | `1_organiser` | Concourant | Ministère de l'Enseignement supérieur, de la Recherche et de l'Espace |
| `1A_engagement_citoyen` | L'engagement citoyen et les campagnes d'incitation au vote | `1_organiser` | Concourant | Ministère de la Justice |
| `1A_engagement_citoyen` | L'engagement citoyen et les campagnes d'incitation au vote | `1_organiser` | Concourant | Ministère de la Transition écologique, de la Biodiversité et des Négociations internationales sur le climat et la nature |
| `1A_engagement_citoyen` | L'engagement citoyen et les campagnes d'incitation au vote | `1_organiser` | Concourant | Ministère de l'Europe et des Affaires étrangères |
| `1A_engagement_citoyen` | L'engagement citoyen et les campagnes d'incitation au vote | `1_organiser` | Concourant | Ministère de la Santé, des Familles, de l'Autonomie et des Personnes handicapées |
| `1A_engagement_citoyen` | L'engagement citoyen et les campagnes d'incitation au vote | `1_organiser` | Concourant | Ministère du Travail et des Solidarités |
| `1B_simplification` | La simplification | `1_organiser` | Menant | Premier ministre |
| `1B_simplification` | La simplification | `1_organiser` | Co-menant | Ministère de la Justice |
| `1B_simplification` | La simplification | `1_organiser` | Co-menant | Ministère de l'Économie, des Finances et de la Souveraineté industrielle, énergétique et numérique |
| `1B_simplification` | La simplification | `1_organiser` | Concourant | Ministère de la Santé, des Familles, de l'Autonomie et des Personnes handicapées |
| `1B_simplification` | La simplification | `1_organiser` | Concourant | Ministère du Travail et des Solidarités |
| `1B_simplification` | La simplification | `1_organiser` | Concourant | Ministère de l'Agriculture, de l'Agro-alimentaire et de la Souveraineté alimentaire |
| `1B_simplification` | La simplification | `1_organiser` | Concourant | Ministère de l'Intérieur |
| `1B_simplification` | La simplification | `1_organiser` | Concourant | Ministère de l'Aménagement du territoire et de la Décentralisation |
| `2A_securite_routiere` | Les politiques de sécurité routière | `2_proteger` | Menant | Ministère de l'Intérieur |
| `2A_securite_routiere` | Les politiques de sécurité routière | `2_proteger` | Concourant | Ministère de la Justice |
| `2A_securite_routiere` | Les politiques de sécurité routière | `2_proteger` | Concourant | Ministère des Transports |
| `2B_securite_du_quotidien` | La sécurité du quotidien | `2_proteger` | Menant | Ministère de l'Intérieur |
| `2B_securite_du_quotidien` | La sécurité du quotidien | `2_proteger` | Concourant | Ministère de la Justice |
| `2B_securite_du_quotidien` | La sécurité du quotidien | `2_proteger` | Concourant | Ministère de la Santé, des Familles, de l'Autonomie et des Personnes handicapées |
| `2B_securite_du_quotidien` | La sécurité du quotidien | `2_proteger` | Concourant | Ministère du Travail et des Solidarités |
| `2C_prevention_et_sante_publique` | Prévention et santé publique | `2_proteger` | Menant | Ministère de la Santé, des Familles, de l'Autonomie et des Personnes handicapées |
| `2C_prevention_et_sante_publique` | Prévention et santé publique | `2_proteger` | Menant | Ministère du Travail et des Solidarités |
| `2C_prevention_et_sante_publique` | Prévention et santé publique | `2_proteger` | Concourant | Ministère des Sports, de la Jeunesse et de la Vie associative |
| `2C_prevention_et_sante_publique` | Prévention et santé publique | `2_proteger` | Concourant | Ministère de l'Agriculture, de l'Agro-alimentaire et de la Souveraineté alimentaire |
| `2C_prevention_et_sante_publique` | Prévention et santé publique | `2_proteger` | Concourant | Ministère de la Transition écologique, de la Biodiversité et des Négociations internationales sur le climat et la nature |
| `2D_vss_et_violences_intrafamiliales` | Les mesures de lutte contre les violences sexistes et sexuelles et les violences intrafamiliales | `2_proteger` | Menant | Premier ministre |
| `2D_vss_et_violences_intrafamiliales` | Les mesures de lutte contre les violences sexistes et sexuelles et les violences intrafamiliales | `2_proteger` | Concourant | Ministère de l'Intérieur |
| `2D_vss_et_violences_intrafamiliales` | Les mesures de lutte contre les violences sexistes et sexuelles et les violences intrafamiliales | `2_proteger` | Concourant | Ministère de l'Économie, des Finances et de la Souveraineté industrielle, énergétique et numérique |
| `2D_vss_et_violences_intrafamiliales` | Les mesures de lutte contre les violences sexistes et sexuelles et les violences intrafamiliales | `2_proteger` | Concourant | Ministère de la Justice |
| `2D_vss_et_violences_intrafamiliales` | Les mesures de lutte contre les violences sexistes et sexuelles et les violences intrafamiliales | `2_proteger` | Concourant | Ministère de l'Éducation nationale |
| `2D_vss_et_violences_intrafamiliales` | Les mesures de lutte contre les violences sexistes et sexuelles et les violences intrafamiliales | `2_proteger` | Concourant | Ministère des Sports, de la Jeunesse et de la Vie associative |
| `2D_vss_et_violences_intrafamiliales` | Les mesures de lutte contre les violences sexistes et sexuelles et les violences intrafamiliales | `2_proteger` | Concourant | Ministère de l'Enseignement supérieur, de la Recherche et de l'Espace |
| `2D_vss_et_violences_intrafamiliales` | Les mesures de lutte contre les violences sexistes et sexuelles et les violences intrafamiliales | `2_proteger` | Concourant | Ministère de la Culture |
| `2D_vss_et_violences_intrafamiliales` | Les mesures de lutte contre les violences sexistes et sexuelles et les violences intrafamiliales | `2_proteger` | Concourant | Ministère de la Santé, des Familles, de l'Autonomie et des Personnes handicapées |
| `2D_vss_et_violences_intrafamiliales` | Les mesures de lutte contre les violences sexistes et sexuelles et les violences intrafamiliales | `2_proteger` | Concourant | Ministère du Travail et des Solidarités |
| `2E_majorite_numerique` | La majorité numérique fixée à 15 ans pour pouvoir s'inscrire sur les réseaux sociaux | `2_proteger` | Menant | Ministère de l'Économie, des Finances et de la Souveraineté industrielle, énergétique et numérique |
| `2E_majorite_numerique` | La majorité numérique fixée à 15 ans pour pouvoir s'inscrire sur les réseaux sociaux | `2_proteger` | Concourant | Ministère de l'Éducation nationale |
| `2E_majorite_numerique` | La majorité numérique fixée à 15 ans pour pouvoir s'inscrire sur les réseaux sociaux | `2_proteger` | Concourant | Ministère de la Justice |
| `2E_majorite_numerique` | La majorité numérique fixée à 15 ans pour pouvoir s'inscrire sur les réseaux sociaux | `2_proteger` | Concourant | Ministère de la Culture |
| `2E_majorite_numerique` | La majorité numérique fixée à 15 ans pour pouvoir s'inscrire sur les réseaux sociaux | `2_proteger` | Concourant | Ministère de l'Intérieur |
| `2E_majorite_numerique` | La majorité numérique fixée à 15 ans pour pouvoir s'inscrire sur les réseaux sociaux | `2_proteger` | Concourant | Ministère de l'Europe et des Affaires étrangères |
| `2F_narcotrafics` | Le plan de lutte contre les narcotrafics | `2_proteger` | Menant | Premier ministre |
| `2F_narcotrafics` | Le plan de lutte contre les narcotrafics | `2_proteger` | Concourant | Ministère de l'Intérieur |
| `2F_narcotrafics` | Le plan de lutte contre les narcotrafics | `2_proteger` | Concourant | Ministère des Outre-mer |
| `2F_narcotrafics` | Le plan de lutte contre les narcotrafics | `2_proteger` | Concourant | Ministère de l'Europe et des Affaires étrangères |
| `2F_narcotrafics` | Le plan de lutte contre les narcotrafics | `2_proteger` | Concourant | Ministère de la Justice |
| `2F_narcotrafics` | Le plan de lutte contre les narcotrafics | `2_proteger` | Concourant | Ministère de l'Éducation nationale |
| `2F_narcotrafics` | Le plan de lutte contre les narcotrafics | `2_proteger` | Concourant | Ministère des Armées et des Anciens combattants |
| `2F_narcotrafics` | Le plan de lutte contre les narcotrafics | `2_proteger` | Concourant | Ministère de la Santé, des Familles, de l'Autonomie et des Personnes handicapées |
| `2F_narcotrafics` | Le plan de lutte contre les narcotrafics | `2_proteger` | Concourant | Ministère du Travail et des Solidarités |
| `2F_narcotrafics` | Le plan de lutte contre les narcotrafics | `2_proteger` | Concourant | Ministère de l'Économie, des Finances et de la Souveraineté industrielle, énergétique et numérique |
| `2G_sante_mentale` | L'action de l'État en matière de santé mentale | `2_proteger` | Menant | Premier ministre |
| `2G_sante_mentale` | L'action de l'État en matière de santé mentale | `2_proteger` | Concourant | Ministère de la Santé, des Familles, de l'Autonomie et des Personnes handicapées |
| `2G_sante_mentale` | L'action de l'État en matière de santé mentale | `2_proteger` | Concourant | Ministère du Travail et des Solidarités |
| `2G_sante_mentale` | L'action de l'État en matière de santé mentale | `2_proteger` | Concourant | Ministère de l'Éducation nationale |
| `2G_sante_mentale` | L'action de l'État en matière de santé mentale | `2_proteger` | Concourant | Ministère de l'Enseignement supérieur, de la Recherche et de l'Espace |
| `2G_sante_mentale` | L'action de l'État en matière de santé mentale | `2_proteger` | Concourant | Ministère de la Justice |
| `2G_sante_mentale` | L'action de l'État en matière de santé mentale | `2_proteger` | Concourant | Ministère de l'Agriculture, de l'Agro-alimentaire et de la Souveraineté alimentaire |
| `2G_sante_mentale` | L'action de l'État en matière de santé mentale | `2_proteger` | Concourant | Ministère de la Culture |
| `2H_gcq` | La promotion des actions individuelles en faveur de la protection de l'environnement (« Chaque geste compte ») | `2_proteger` | Menant | Ministère de la Transition écologique, de la Biodiversité et des Négociations internationales sur le climat et la nature |
| `2H_gcq` | La promotion des actions individuelles en faveur de la protection de l'environnement (« Chaque geste compte ») | `2_proteger` | Concourant | Ministère de l'Agriculture, de l'Agro-alimentaire et de la Souveraineté alimentaire |
| `2H_gcq` | La promotion des actions individuelles en faveur de la protection de l'environnement (« Chaque geste compte ») | `2_proteger` | Concourant | Ministère de la Culture |
| `2H_gcq` | La promotion des actions individuelles en faveur de la protection de l'environnement (« Chaque geste compte ») | `2_proteger` | Concourant | Ministère de l'Éducation nationale |
| `2H_gcq` | La promotion des actions individuelles en faveur de la protection de l'environnement (« Chaque geste compte ») | `2_proteger` | Concourant | Ministère de la Santé, des Familles, de l'Autonomie et des Personnes handicapées |
| `2H_gcq` | La promotion des actions individuelles en faveur de la protection de l'environnement (« Chaque geste compte ») | `2_proteger` | Concourant | Ministère du Travail et des Solidarités |
| `3A_france_sante` | France Santé | `3_accompagner` | Menant | Ministère de la Santé, des Familles, de l'Autonomie et des Personnes handicapées |
| `3A_france_sante` | France Santé | `3_accompagner` | Menant | Ministère du Travail et des Solidarités |
| `3A_france_sante` | France Santé | `3_accompagner` | Concourant | Ministère de l'Aménagement du territoire et de la Décentralisation |
| `3B_petite_enfance` | Le service public de la petite enfance | `3_accompagner` | Menant | Ministère de la Santé, des Familles, de l'Autonomie et des Personnes handicapées |
| `3B_petite_enfance` | Le service public de la petite enfance | `3_accompagner` | Menant | Ministère du Travail et des Solidarités |
| `3B_petite_enfance` | Le service public de la petite enfance | `3_accompagner` | Concourant | Ministère de la Culture |
| `3C_allocation_sociale_unique` | La mise en place d'une allocation sociale unique regroupant plusieurs aides (RSA, prime d'activité, aides au logement) | `3_accompagner` | Menant | Ministère de la Santé, des Familles, de l'Autonomie et des Personnes handicapées |
| `3C_allocation_sociale_unique` | La mise en place d'une allocation sociale unique regroupant plusieurs aides (RSA, prime d'activité, aides au logement) | `3_accompagner` | Menant | Ministère du Travail et des Solidarités |
| `4A_egalite_femmes_et_hommes` | Les politiques en faveur de l'égalité entre les femmes et les hommes (Plan « Toutes et tous égaux ») | `4_consolider` | Menant | Premier ministre |
| `4A_egalite_femmes_et_hommes` | Les politiques en faveur de l'égalité entre les femmes et les hommes (Plan « Toutes et tous égaux ») | `4_consolider` | Concourant | Ministère de la Santé, des Familles, de l'Autonomie et des Personnes handicapées |
| `4A_egalite_femmes_et_hommes` | Les politiques en faveur de l'égalité entre les femmes et les hommes (Plan « Toutes et tous égaux ») | `4_consolider` | Concourant | Ministère du Travail et des Solidarités |
| `4A_egalite_femmes_et_hommes` | Les politiques en faveur de l'égalité entre les femmes et les hommes (Plan « Toutes et tous égaux ») | `4_consolider` | Concourant | Ministère de l'Économie, des Finances et de la Souveraineté industrielle, énergétique et numérique |
| `4A_egalite_femmes_et_hommes` | Les politiques en faveur de l'égalité entre les femmes et les hommes (Plan « Toutes et tous égaux ») | `4_consolider` | Concourant | Ministère de l'Agriculture, de l'Agro-alimentaire et de la Souveraineté alimentaire |
| `4A_egalite_femmes_et_hommes` | Les politiques en faveur de l'égalité entre les femmes et les hommes (Plan « Toutes et tous égaux ») | `4_consolider` | Concourant | Ministère de l'Éducation nationale |
| `4A_egalite_femmes_et_hommes` | Les politiques en faveur de l'égalité entre les femmes et les hommes (Plan « Toutes et tous égaux ») | `4_consolider` | Concourant | Ministère des Sports, de la Jeunesse et de la Vie associative |
| `4A_egalite_femmes_et_hommes` | Les politiques en faveur de l'égalité entre les femmes et les hommes (Plan « Toutes et tous égaux ») | `4_consolider` | Concourant | Ministère de la Justice |
| `4A_egalite_femmes_et_hommes` | Les politiques en faveur de l'égalité entre les femmes et les hommes (Plan « Toutes et tous égaux ») | `4_consolider` | Concourant | Ministère de l'Enseignement supérieur, de la Recherche et de l'Espace |
| `4A_egalite_femmes_et_hommes` | Les politiques en faveur de l'égalité entre les femmes et les hommes (Plan « Toutes et tous égaux ») | `4_consolider` | Concourant | Ministère de la Transition écologique, de la Biodiversité et des Négociations internationales sur le climat et la nature |
| `4A_egalite_femmes_et_hommes` | Les politiques en faveur de l'égalité entre les femmes et les hommes (Plan « Toutes et tous égaux ») | `4_consolider` | Concourant | Ministère de l'Aménagement du territoire et de la Décentralisation |
| `4A_egalite_femmes_et_hommes` | Les politiques en faveur de l'égalité entre les femmes et les hommes (Plan « Toutes et tous égaux ») | `4_consolider` | Concourant | Ministère des Transports |
| `4A_egalite_femmes_et_hommes` | Les politiques en faveur de l'égalité entre les femmes et les hommes (Plan « Toutes et tous égaux ») | `4_consolider` | Concourant | Ministère de la Ville et du Logement |
| `4A_egalite_femmes_et_hommes` | Les politiques en faveur de l'égalité entre les femmes et les hommes (Plan « Toutes et tous égaux ») | `4_consolider` | Concourant | Ministère des Armées et des Anciens combattants |
| `4A_egalite_femmes_et_hommes` | Les politiques en faveur de l'égalité entre les femmes et les hommes (Plan « Toutes et tous égaux ») | `4_consolider` | Concourant | Ministère de l'Intérieur |
| `4A_egalite_femmes_et_hommes` | Les politiques en faveur de l'égalité entre les femmes et les hommes (Plan « Toutes et tous égaux ») | `4_consolider` | Concourant | Ministère de la Culture |
| `4B_relance_logement` | La politique de relance du logement (construction de 15 000 logements étudiants, création du statut du bailleur privé, etc.) | `4_consolider` | Menant | Ministère de la Ville et du Logement |
| `4B_relance_logement` | La politique de relance du logement (construction de 15 000 logements étudiants, création du statut du bailleur privé, etc.) | `4_consolider` | Concourant | Ministère de l'Enseignement supérieur, de la Recherche et de l'Espace |
| `4B_relance_logement` | La politique de relance du logement (construction de 15 000 logements étudiants, création du statut du bailleur privé, etc.) | `4_consolider` | Concourant | Ministère de l'Économie, des Finances et de la Souveraineté industrielle, énergétique et numérique |
| `4C_plan_electrification` | Le plan d'électrification (transports, logement, décarbonation de l'industrie) | `4_consolider` | Menant | Ministère de la Transition écologique, de la Biodiversité et des Négociations internationales sur le climat et la nature |
| `4C_plan_electrification` | Le plan d'électrification (transports, logement, décarbonation de l'industrie) | `4_consolider` | Menant | Ministère des Transports |
| `4C_plan_electrification` | Le plan d'électrification (transports, logement, décarbonation de l'industrie) | `4_consolider` | Menant | Ministère de la Ville et du Logement |
| `4C_plan_electrification` | Le plan d'électrification (transports, logement, décarbonation de l'industrie) | `4_consolider` | Co-menant | Ministère de l'Économie, des Finances et de la Souveraineté industrielle, énergétique et numérique |
| `4D_aide_a_mourir` | L'aide à mourir | `4_consolider` | Menant | Ministère de la Santé, des Familles, de l'Autonomie et des Personnes handicapées |
| `4D_aide_a_mourir` | L'aide à mourir | `4_consolider` | Menant | Ministère du Travail et des Solidarités |
| `5A_lutte_fraude` | La lutte contre la fraude sociale, fiscale, douanière et aux aides publiques | `5_favoriser` | Menant | Ministère de l'Économie, des Finances et de la Souveraineté industrielle, énergétique et numérique |
| `5A_lutte_fraude` | La lutte contre la fraude sociale, fiscale, douanière et aux aides publiques | `5_favoriser` | Co-menant | Ministère de la Santé, des Familles, de l'Autonomie et des Personnes handicapées |
| `5A_lutte_fraude` | La lutte contre la fraude sociale, fiscale, douanière et aux aides publiques | `5_favoriser` | Co-menant | Ministère du Travail et des Solidarités |
| `5A_lutte_fraude` | La lutte contre la fraude sociale, fiscale, douanière et aux aides publiques | `5_favoriser` | Concourant | Ministère de la Justice |
| `5A_lutte_fraude` | La lutte contre la fraude sociale, fiscale, douanière et aux aides publiques | `5_favoriser` | Concourant | Ministère de l'Intérieur |
| `5B_metiers_d_avenir` | Les métiers d'avenir | `5_favoriser` | Menant | Premier ministre |
| `5B_metiers_d_avenir` | Les métiers d'avenir | `5_favoriser` | Co-menant | Ministère de l'Éducation nationale |
| `5B_metiers_d_avenir` | Les métiers d'avenir | `5_favoriser` | Co-menant | Ministère de la Santé, des Familles, de l'Autonomie et des Personnes handicapées |
| `5B_metiers_d_avenir` | Les métiers d'avenir | `5_favoriser` | Co-menant | Ministère du Travail et des Solidarités |
| `5B_metiers_d_avenir` | Les métiers d'avenir | `5_favoriser` | Concourant | Ministère de la Culture |
| `5B_metiers_d_avenir` | Les métiers d'avenir | `5_favoriser` | Concourant | Ministère de l'Agriculture, de l'Agro-alimentaire et de la Souveraineté alimentaire |
| `5B_metiers_d_avenir` | Les métiers d'avenir | `5_favoriser` | Concourant | Ministère de l'Intérieur |
| `5B_metiers_d_avenir` | Les métiers d'avenir | `5_favoriser` | Concourant | Ministère de l'Économie, des Finances et de la Souveraineté industrielle, énergétique et numérique |
| `5B_metiers_d_avenir` | Les métiers d'avenir | `5_favoriser` | Concourant | Ministère de la Transition écologique, de la Biodiversité et des Négociations internationales sur le climat et la nature |
| `5B_metiers_d_avenir` | Les métiers d'avenir | `5_favoriser` | Concourant | Ministère des Armées et des Anciens combattants |
| `6A_rearmement_francais` | Le plan de réarmement français | `6_defendre` | Menant | Ministère des Armées et des Anciens combattants |
| `6A_rearmement_francais` | Le plan de réarmement français | `6_defendre` | Concourant | Ministère de l'Économie, des Finances et de la Souveraineté industrielle, énergétique et numérique |
| `6B_attractivite_economique` | Attractivité économique de la France | `6_defendre` | Menant | Ministère de l'Europe et des Affaires étrangères |
| `6B_attractivite_economique` | Attractivité économique de la France | `6_defendre` | Co-menant | Ministère de l'Économie, des Finances et de la Souveraineté industrielle, énergétique et numérique |
| `6B_attractivite_economique` | Attractivité économique de la France | `6_defendre` | Concourant | Ministère de la Culture |
| `6B_attractivite_economique` | Attractivité économique de la France | `6_defendre` | Concourant | Ministère des Sports, de la Jeunesse et de la Vie associative |
| `6C_service_national` | Le service national | `6_defendre` | Menant | Ministère des Armées et des Anciens combattants |
| `6C_service_national` | Le service national | `6_defendre` | Concourant | Ministère de l'Éducation nationale |
| `6D_la_reserve` | Le doublement des effectifs de la réserve | `6_defendre` | Menant | Ministère des Armées et des Anciens combattants |
| `6D_la_reserve` | Le doublement des effectifs de la réserve | `6_defendre` | Concourant | Ministère de l'Intérieur |

## Attributs

| Attribut | Type | Obligatoire | Description | Exemple |
| --- | --- | --- | --- | --- |
| `missions[].id` | chaîne | Oui | Identifiant technique | `"1_organiser"` |
| `missions[].position` | entier | Oui | Numéro d'ordre de la mission | `1` |
| `missions[].libelle` | chaîne | Oui | Libellé officiel de la mission | `"Organiser le fonctionnement du pays, la vie démocratique et établir la loi"` |
| `missions[].couleur` | chaîne | Oui | Nom de la couleur associée à la mission | `"Bleu Océan"` |
| `missions[].couleur_hexadecimal` | chaîne | Oui | Code hexadécimal de la couleur préfixé par un # | `"#3476cb"` |
| `missions[].objets[].id` | chaîne | Oui | Identifiant technique | `"1A_engagement_citoyen"` |
| `missions[].objets[].libelle` | chaîne | Oui | Libellé officiel de l'objet | `"L'engagement citoyen et les campagnes d'incitation au vote"` |
| `missions[].objets[].description` | chaîne | Non | Description détaillée de l'objet | `"Ces campagnes visent à renforcer la participation des citoyens..."` |
| `missions[].objets[].menants_id[]` | UUID v4 | Oui | ID des ministères pilotes (1 à n), issus de `gouvernements-et-ministeres.json` | `["a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d"]` |
| `missions[].objets[].id_co_menants_id[]` | UUID v4 | Non | ID des ministères co-pilotes (0 à n), issus de `gouvernements-et-ministeres.json` | `["c3d4e5f6-a7b8-4c9d-0e1f-2a3b4c5d6e7f"]` |
| `missions[].objets[].concourants_id[]` | UUID v4 | Non | ID des ministères contributeurs (0 à n), issus de `gouvernements-et-ministeres.json` | `["d4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a"]` |

## Données

Le fichier `missions-essentielles.json` est disponible sur data.gouv.fr.

## Contact

Service d'information du Gouvernement (SIG) - https://www.info.gouv.fr/contact/services-du-premier-ministre?service=275ba149-e350-4077-b47e-b46ab70ab9c3

## Licence

Licence Ouverte / Open Licence version 2.0