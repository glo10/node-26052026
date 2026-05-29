# Instructions pour lancer nos services

1. Installez Docker Desktop sur votre machine depuis [https://docs.docker.com/desktop/setup/install/windows-install/](https://docs.docker.com/desktop/setup/install/windows-install/)
2. Ouvrez Docker Desktop sur Windows
3. Copiez/collez le fichier [.env.example](.env.example), renommez le en ***.env*** et modifiez les informations présentes dans ce fichier par vos identifiants pour vous connecter à la BDD.
4. Ouvrez le terminal et placez-vous dans le dossier racine où se trouve [docker-compose.yml](./docker-compose.yml)
5. Lancez vos services avec la commande suivante
```bash
docker compose up --build -d
```