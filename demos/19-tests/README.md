# Les tests

## Extensions

- Pour les tests unitaires et d'intégration, extension .test.[m|c].js
- Pour les tests end to end avec Cypress l'extension est .cy

## Logique des tests

AAA

1. Arrange : préparer l'environnement pour tester (variables, fonctions, etc. dont vous avez besoin pour les tests)
2. Act : appeler la fonction à tester
3. Assert : Vérifier que le résultat ou comportement est bien celui attendu

## Tests unitaire avec Vitest

1. Installer le module vitest en dev
```bash
npm i -D vitest
```
2. Mettre en place la config [vitest.config.js](./vitest.config.js)
3. Mettre en place un script pour lancer les tests
```bash
# Depuis package.json
"script": {
    "test": "vitest"
}
```
- Détecte grâce à la config les fichiers à exécuter
4. Lancer les tests avec la commande

```bash
npm run test
```
---

## Tests d'intégration avec supertest

Ici pour tester les routes de notre API