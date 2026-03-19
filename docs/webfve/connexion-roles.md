---
sidebar_position: 2
title: Connexion et rôles
---

# Connexion et sélection du rôle

## La page de connexion

Accédez à webfve via l'URL suivante :

**[https://progres.mesrs.dz/webfve/login.xhtml](https://progres.mesrs.dz/webfve/login.xhtml)**

La page de connexion affiche le formulaire suivant :

| Champ | Description |
|-------|-------------|
| **Nom d'utilisateur** | Votre identifiant fourni par votre établissement |
| **Mot de passe** | Votre mot de passe personnel |
| **Clé double authentification** | Code 2FA généré par votre application d'authentification |

:::info Double authentification (2FA)
webfve utilise un système de double authentification. En plus de votre identifiant et mot de passe, vous devez saisir une clé temporaire générée par une application d'authentification. Si vous n'avez pas encore configuré la 2FA sur votre compte, contactez le responsable informatique de votre établissement.
:::

Une option **"Rester connecté"** est disponible — elle maintient votre session active entre les visites. Ne l'activez pas sur un ordinateur partagé.

En cas d'oubli du mot de passe, cliquez sur **"Mot de passe oublié ?"** en bas du formulaire.

---

## La page d'accueil — Annonces et ouvertures

Après connexion, vous arrivez sur la page principale appelée **"Annonces et ouvertures"**.

Cette page est un tableau de bord des fonctionnalités actives et des tâches ouvertes sur la plateforme. Un compteur en haut à droite indique le nombre total de fonctionnalités disponibles (exemple : **35 fonctionnalités**).

Les fonctionnalités sont affichées sous forme de **cartes** organisées en grille, paginées par groupes de 6. Chaque carte affiche :

- Un **tag de catégorie** coloré (ex. EXAMEN, INSCRIPTIONS ADMINISTRATIVES, RÉSIDANAT, CONCOURS DOCTORAT, DOSSIER ÉTUDIANT…)
- Le **titre** de la fonctionnalité ou de la tâche
- **FONCTION** — la tâche que cette fonctionnalité accomplit
- **RÔLE(S)** — le ou les rôles autorisés à l'utiliser
- **DOMAINE** — le module concerné (FVE, WEBFVE…)
- Une **date d'ouverture** ou un statut (Ouvert / période définie)

:::tip
Les cartes affichées sur cette page reflètent les fonctionnalités disponibles **pour l'ensemble de la plateforme**, pas seulement pour votre rôle actif. C'est une vue globale des tâches en cours dans votre établissement.
:::

---

## La barre de navigation supérieure

La barre de navigation supérieure affiche en permanence quatre éléments clés :

- Le **logo PROGRES** à gauche
- La mention **FORMATION ET VIE ETUDIANTE** et le nom de votre établissement au centre
- **L'année universitaire active** (ex. 2025/2026) — sélecteur de contexte global
- Le bouton **Rôle** à droite — sélecteur de rôle actif

---

## L'année universitaire — contexte global de la session

L'année universitaire affichée dans la barre supérieure est l'un des éléments les plus importants de l'interface — elle définit le **contexte global de toute votre session**.

Cela signifie concrètement :

- Toutes les **données affichées** (étudiants, notes, groupes, délibérations…) appartiennent à l'année sélectionnée
- Toutes les **modifications effectuées** (saisie de notes, création de groupes, inscriptions…) sont enregistrées dans l'année sélectionnée
- Changer d'année permet de **consulter ou modifier les données des années passées**

:::danger Attention — risque d'erreur critique
Vérifiez toujours l'année universitaire affichée avant de commencer à travailler. Si vous saisissez des notes ou effectuez des modifications avec la mauvaise année sélectionnée, les données seront enregistrées dans la mauvaise année. Assurez-vous d'être sur **2025/2026** avant toute opération courante.
:::

**Pour changer d'année :** cliquez sur le badge de l'année dans la barre supérieure et sélectionnez l'année souhaitée dans la liste déroulante. La page se recharge complètement après chaque changement d'année.

L'historique disponible remonte jusqu'à **2019/2020**, année à partir de laquelle PROGRES a été adopté officiellement et exclusivement dans les universités algériennes. Toutes les données depuis cette année sont accessibles et consultables.

---

## Comprendre les rôles

Un rôle dans webfve représente une **fonction précise dans un département ou une structure** de l'université. Un même compte peut avoir plusieurs rôles assignés — par exemple, un enseignant peut être à la fois gestionnaire des examens dans son département et gestionnaire de groupes pédagogiques dans une autre structure.

### Format d'un rôle

Chaque rôle suit ce format :
[Nom de l'université] [Intitulé du rôle] [Département ou Groupe entre crochets]
**Exemple :**
université d'el oued Gestionnaire des examens et délibérations [Département des Lettres et langue française]
### Sélectionner un rôle

Cliquez sur le bouton **Rôle** dans la barre de navigation supérieure. Un menu déroulant s'ouvre et liste tous les rôles assignés à votre compte. La page se recharge complètement après chaque changement de rôle.

:::warning
Vous devez sélectionner un rôle avant d'accéder aux fonctionnalités. Si la liste est vide ou si un rôle attendu n'apparaît pas, contactez le responsable du référentiel de votre établissement — c'est lui qui gère l'attribution des rôles via webgrh.
:::

:::tip
Pensez à vérifier que vous êtes sur le bon rôle **et** la bonne année universitaire avant de commencer une tâche — ces deux paramètres définissent ensemble le contexte de tout ce que vous faites sur la plateforme.
:::

### Rôles disponibles dans webfve

Voici les rôles identifiés sur la plateforme. Les fonctionnalités accessibles varient selon le rôle et le département assigné.

| Rôle | Description |
|------|-------------|
| **Gestionnaire pédagogique** | Gestion complète de la pédagogie au niveau faculté ou département |
| **Gestionnaire des examens et délibérations** | Saisie et gestion des notes d'examens, organisation des délibérations |
| **Gestionnaire des examens et délibérations (Enregistrement des notes)** | Variante dédiée à l'enregistrement des notes uniquement |
| **Gestionnaire contrôle continu** | Gestion des notes de contrôle continu |
| **Gestionnaire contrôle continu (Enregistrement des notes)** | Variante dédiée à l'enregistrement des notes de CC |
| **GESTIONNAIRE GROUPES PEDAGOGIQUES** | Création et gestion des groupes pédagogiques |
| **Gestionnaire d'emploi de temps** | Gestion des emplois du temps |
| **Charge enseignement** | Gestion de la charge d'enseignement des enseignants |
| **Consultation des délibérations** | Accès en lecture seule aux résultats de délibérations |
| **Consultation des relevés de notes** | Accès en lecture seule aux relevés de notes |
| **Habilitation Universitaire** | Gestion des habilitations universitaires |
| **Réinscription** | Traitement des réinscriptions étudiantes |
| **Gestion des dettes** | Gestion des dettes étudiantes |
| **Chef établissement** | Fonctions de validation au niveau établissement |
| **Gestionnaire Situations Étudiants (Retardataires)** | Traitement des dossiers des bacheliers retardataires |

:::note Variabilité selon les établissements
Les rôles disponibles et leur intitulé exact peuvent varier légèrement d'un établissement à un autre. Cette liste est basée sur l'université d'El Oued — si vous constatez des différences dans votre université, [contribuez à enrichir cette page](https://github.com/progres-docs/progres-docs.github.io/issues/new).
:::

---

## Le menu latéral — navigation par rôle

Une fois un rôle sélectionné, le **menu latéral gauche** se met à jour pour refléter exactement les fonctionnalités accessibles avec ce rôle.

### Exemple : rôle Gestionnaire pédagogique

Avec le rôle **Gestionnaire pédagogique [Faculté des lettres et des langues]**, le menu latéral affiche :

- **ACCUEIL** — retour à la page des annonces
- **EXPORTATION DE DONNÉES** — export de données en fichiers
- **OFFRES DE FORMATION (OF)** — gestion des canevas et offres de formation
- **DOSSIERS BACHELIERS** — suivi des dossiers des nouveaux bacheliers
- **INSCRIPTIONS ADMINISTRATIVES** — gestion des inscriptions
- **DOSSIER ETUDIANT** — accès aux dossiers individuels des étudiants
- **GESTION PÉDAGOGIQUE** — gestion des groupes, sections, filières
- **CHARGE D'ENSEIGNEMENT** — suivi de la charge horaire des enseignants
- **EMPLOI DU TEMPS** — gestion des plannings
- **CONGÉS** — gestion des congés académiques
- **ASSIDUITÉS ET EXCLUSIONS** — suivi des absences et exclusions
- **MON PROFILE** — paramètres de votre compte

:::note
Le menu latéral minimal (ACCUEIL, EXPORTATION DE DONNÉES, MON PROFILE) apparaît lorsqu'aucun rôle n'est sélectionné ou que le rôle actif dispose de permissions très limitées.
:::

---

*Page rédigée à partir de captures d'écran de l'université d'El Oued — académie 2025/2026. [Suggérer une correction ou un ajout](https://github.com/progres-docs/progres-docs.github.io/issues/new).*