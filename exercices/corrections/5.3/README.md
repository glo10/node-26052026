# Correction exercice 5.3 : API ligue de champions

## Lancement du projet

Projet express avec l'utilisation du module *express* et le standard ECMAScript.
Express a été installé avec `npm i express` et pas la CLI

`npm run dev`

## Lancement des tests d'intégration avec supertest

`npm run test`
Ici pas besoin de lancer le serveur en parallèle, étant donné qu'on exporte app.mjs, on peut l'utiliser autant de fois qu'on le souhaite notamment ici pour l'environnement de test.