
# Newsletter studi decembre 2022

## Présentation

Résolution de l'exercice proposé dans la newsletter de decembre 2022.
Application proposant une todoList permettant au père Noël de pouvoir livrer correctement tous les enfants (et grand enfant) du monde entier.

Cet exercice permet de mettre en évidence les compétences suivantes : 
- front-end : site web dynamique et responsive
- back-end : composant d'accès à la base de données
- base de données : manipulation des opérations elementaires 

## Pré-requis

Afin de pouvoir lancer le projet en local, vous devez avoir ces outils sur votre machine : 
- pour la partie back
    - [Java JDK 17](https://adoptium.net/temurin/releases/)
    - [Maven](https://dlcdn.apache.org/maven/maven-3/3.8.7/binaries/apache-maven-3.8.7-bin.zip)
- pour la partie front
    - JS (LTS) 

- pour la partie base de données 
    - créez vous un compte sur [AlwaysData](https://www.alwaysdata.com/fr/)
    - créez une base de données, puis, un utilisateur avec les droits sur cette base de données
    - récupérez les informations de connexion à la base de données (nom de la base, nom de l'utilisateur, mot de passe, adresse de la base de données)
    - dans le fichier application.properties du projet back, remplacez les valeurs par défaut par les valeurs récupérées précédemment

IDE
- [Visual Studio Code](https://code.visualstudio.com/)


## Technologies utilisées

Ce projet utilise en front, Spring Boot 2.7.8 en back-end

## Utilisation

### Lancement du projet

Pour lancer le projet, il faut lancer les commandes suivantes dans l'ordre :
- `mvn clean install` dans le dossier back
- `yarn install` dans le dossier front
- `yarn start` dans le dossier front
- `mvn spring-boot:run` dans le dossier back
- ouvrir votre navigateur sur l'adresse http://localhost:4200

### Fonctionnalités

- S'enregistre avec prénom, nom, email et mot de passe
- Se connecter avec prénom, nom, email et mot de passe  
- Afficher des questions
- Sélectionner une réponse
- Obtenir un score 
- Afficher un message en foction du score



