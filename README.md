🏋️‍♂️ Fitness Tracker App

Une application mobile pour suivre votre progression physique et calculer le pourcentage de graisse corporelle, avec des fonctionnalités avancées de gestion de profil, de suivi, et d'organisation de photos.

📚 Contexte du projet

L'application offre :

Gestion d'un profil utilisateur.

Calcul de l'IMC et du pourcentage de graisse corporelle.

Sauvegarde des données de progression.

Prise et gestion de photos de progression.

Génération de timelapses à partir des photos.

🔧 Fonctionnalités principales

🔓 Gestion du profil utilisateur

Création et mise à jour des informations personnelles :

Nom, Prénom, Âge, Nationalité, Poids, Taille, Adresse.

Calcul automatique de l’IMC à partir du poids et de la taille.

Sauvegarde des données avec AsyncStorage ou dans une base de données SQLite.

🔄 Calcul du pourcentage de graisse corporelle

Formulaire pour saisir les mesures corporelles (tour de taille, tour de cou, tour de hanche, etc.).

Calcul basé sur la méthode US Navy.

Suivi hebdomadaire avec affichage graphique.

📷 Prise et organisation des photos

Capture de photos avec la caméra.

Classement automatique par date et organisation hebdomadaire.

Génération d’un timelapse vidéo.

🎨 Application de filtres sur les images

Amélioration des photos avant la génération du timelapse :

Filtres : noir et blanc, contraste, luminosité.

🌐 Technologies utilisées

Technologie

Usage

React Native avec Expo

Développement rapide et simple

React Navigation

Gestion des différents écrans

AsyncStorage / SQLite

Persistance des données utilisateur

expo-camera

Capture de photos

react-native-chart-kit

Affichage des graphiques de progression

react-native-image-filter-kit

Application de filtres sur les images

react-native-video-processing

Génération des timelapses

🌇 Structure de l’application

🏠 Écran d’accueil

Affichage du profil utilisateur avec l’IMC.

Accès rapide aux fonctionnalités (calcul, photos, timelapse).

📊 Écran de calcul de graisse corporelle

Formulaire pour saisir les mesures corporelles.

Affichage du pourcentage calculé.

Graphique de suivi hebdomadaire.

📷 Écran de prise de photos

Interface caméra intuitive.

Galerie organisée par date et semaines.

📽ï¸  Écran de génération de timelapse

Aperçu des photos.

Options pour appliquer des filtres.

Génération et prévisualisation du timelapse.

🚀 Démarrage du projet

Prérequis

Node.js 🚀

Expo CLI

Installation

Clonez le dépôt :

git clone https://github.com/sanaahamliri/Body_Tracker.git

Accédez au dossier du projet :

cd my-app

Installez les dépendances :

npm install

Lancez l’application :

expo start

🔧 Contributions

Les contributions sont les bienvenues ! Merci de suivre ces étapes :

Forkez le projet.

Créez une branche pour votre fonctionnalité : git checkout -b ma-nouvelle-fonctionnalite.

Commitez vos modifications : git commit -m 'Ajout d'une fonctionnalité'.

Poussez la branche : git push origin ma-nouvelle-fonctionnalite.

Ouvrez une Pull Request.

📚 License

Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.

🔗 Liens utiles

Documentation Expo

React Native

react-native-chart-kit

react-native-image-filter-kit

