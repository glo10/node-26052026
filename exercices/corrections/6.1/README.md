# Installation

## Docker

1. [cf. indications mise en place serveur MongoDB](../../6.1.md)
2. Copiez/collez *.env.example* et le renommer en *.env*
3. Lancez les services pour Docker
```bash
docker compose up --build -d
```

## Cloud

1. Récupérez l'URL commançant par mongo:srv+ depuis votre espace
2. 

## Lancement de l'application

```bash
npm run dev
```

## Intérrogez l'API

- Soit depuis un client tels que Postman ou ThunderClient
- Soit depuis CURL
```bash
# Récupérez toutes les équipes
curl http://localhost:8061/teams

# Récupérez une équipe
curl http://localhost:8061/teams/psg

# Ajoutez une équipe
curl -X POST http://localhost:8061/teams \
  -H "Content-Type: application/json" \
  -d '{ "name":"psg", "country": "france" }'
```