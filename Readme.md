# Shopease

Shopease est une application mobile permettant aux utilisateurs de parcourir, acheter et gérer des cours à partir d'une plateforme de commerce électronique spécialisée.

## Fonctionnalités

### Affichage des Cours
- Afficher de manière dynamique la liste des cours disponibles.
- Afficher un message approprié en cas d'absence de cours.

### Navigation et Interaction
- Intégrer des icônes interactives telles que "Plus de détails" et "Ajouter au panier" pour faciliter la navigation.

### Gestion des Écrans
- Créer deux nouveaux écrans distincts : "CourseInfos" et "Panier".
- Mettre en place un stackNavigator pour assurer une transition fluide entre les écrans "Landing" et "CourseInfos".

### Personnalisation de CourseInfos
- Afficher le nom du cours dans l'en-tête de l'écran "CourseInfos".
- Intégrer une icône sur le côté droit permettant de naviguer rapidement vers le panier.

### Manipulation du Panier
- Permettre l'ajout de cours au panier.
- Retirer du catalogue les cours ajoutés au panier.
- Afficher les cours enregistrés dans le panier.
- Permettre la suppression des cours du panier.
- Afficher à nouveau dans le catalogue les cours retirés du panier.

### Processus d'Achat
- Finaliser l'achat des articles présents dans le panier.
- Vider le panier après chaque achat réussi.

### Navigation Globale
- Implémenter un Drawer Navigator comprenant trois onglets principaux : "Catalogue", "Panier" et "Achats".

## Utilisation de Redux
- Redux est utilisé pour les fonctions de réduction suivantes :
  - reducerCourses pour la gestion des cours.
  - reducerCart pour la gestion du panier.
  - reducerPayment pour la gestion des paiements.

## Couverture de Code
- La couverture du code a été augmentée de 20%.
- L'application a été dockerisée pour faciliter le déploiement.

## Dépendances Principales
- @expo/vector-icons
- @gorhom/bottom-sheet
- @react-navigation/bottom-tabs
- @react-navigation/drawer
- @react-navigation/native
- @react-navigation/native-stack
- react-redux
- redux

## Développement
- Clonez ce dépôt.
- Installez les dépendances en exécutant `npm install`.
- Pour lancer l'application sur Android, exécutez `npm run android`.
- Pour lancer l'application sur iOS, exécutez `npm run ios`.
- Pour lancer l'application sur le web, exécutez `npm run web`.


