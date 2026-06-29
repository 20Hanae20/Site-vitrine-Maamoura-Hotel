# Guide de Déploiement VPS - Hôtel Maamoura

Ce guide vous explique pas à pas comment déployer votre site vitrine Next.js sur un serveur VPS (ex: OVH, DigitalOcean, Hetzner, Scaleway) fonctionnant sous **Ubuntu** (recommandé).

---

## Étape 1 : Préparation du VPS

Connectez-vous à votre VPS en SSH :
```bash
ssh root@IP_DE_VOTRE_VPS
```

Mettez à jour le système :
```bash
sudo apt update && sudo apt upgrade -y
```

---

## Étape 2 : Choix de la méthode de déploiement

Vous avez le choix entre **Méthode A (Docker - Recommandée)** et **Méthode B (PM2 / Node.js standard)**.

### Méthode A : Avec Docker (Recommandée & Plus simple)

L'utilisation de Docker évite d'installer Node.js globalement et assure que l'application tourne dans un environnement isolé identique à celui de développement.

1. **Installer Docker et Docker Compose :**
   ```bash
   sudo apt install docker.io docker-compose -y
   sudo systemctl start docker
   sudo systemctl enable docker
   ```

2. **Cloner le projet sur le VPS :**
   ```bash
   cd /var/www
   git clone <URL_DE_VOTRE_DEPOT_GIT> maamoura-hotel
   cd maamoura-hotel
   ```

3. **Lancer l'application :**
   ```bash
   docker-compose up -d --build
   ```
   L'application tourne maintenant en arrière-plan sur le port **3000**.

---

### Méthode B : Avec Node.js & PM2 (Sans Docker)

Si vous préférez exécuter l'application directement avec Node.js.

1. **Installer Node.js (via NVM) :**
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   source ~/.bashrc
   nvm install 20
   nvm use 20
   ```

2. **Installer PM2 (gestionnaire de processus) globalement :**
   ```bash
   npm install pm2 -g
   ```

3. **Cloner le projet :**
   ```bash
   cd /var/www
   git clone <URL_DE_VOTRE_DEPOT_GIT> maamoura-hotel
   cd maamoura-hotel
   ```

4. **Installer les dépendances et builder l'application :**
   ```bash
   npm install --legacy-peer-deps
   npm run build
   ```

5. **Démarrer l'application avec PM2 :**
   ```bash
   pm2 start ecosystem.config.js
   ```

6. **Configurer PM2 pour démarrer au reboot du serveur :**
   ```bash
   pm2 startup
   # Exécutez la commande générée à l'écran par PM2
   pm2 save
   ```

---

## Étape 3 : Configuration du serveur Web (Nginx)

Nginx servira de reverse proxy pour rediriger le trafic des ports 80 (HTTP) et 443 (HTTPS) vers votre application (port 3000).

1. **Installer Nginx :**
   ```bash
   sudo apt install nginx -y
   ```

2. **Créer le fichier de configuration Nginx :**
   ```bash
   sudo nano /etc/nginx/sites-available/maamoura-hotel
   ```
   Copiez le contenu du fichier `nginx.conf` présent à la racine du projet dans cet éditeur. Le domaine `maamoura.luxtech.ma` est déjà configuré. Sauvegardez et quittez (`Ctrl+O`, `Entrée`, `Ctrl+X`).

3. **Activer la configuration et redémarrer Nginx :**
   ```bash
   sudo ln -s /etc/nginx/sites-available/maamoura-hotel /etc/nginx/sites-enabled/
   # Supprimer le site par défaut de Nginx s'il existe
   sudo rm /etc/nginx/sites-enabled/default
   # Tester la configuration
   sudo nginx -t
   # Redémarrer Nginx
   sudo systemctl restart nginx
   ```

---

## Étape 4 : Sécuriser le site avec Let's Encrypt (SSL / HTTPS)

Pour installer un certificat SSL gratuit et automatique :

1. **Installer Certbot pour Nginx :**
   ```bash
   sudo apt install certbot python3-certbot-nginx -y
   ```

2. **Générer le certificat SSL :**
   ```bash
   sudo certbot --nginx -d maamoura.luxtech.ma
   ```
   Suivez les instructions à l'écran (entrez votre e-mail, acceptez les conditions, et choisissez l'option de redirection automatique HTTP vers HTTPS).

3. **Vérifier le renouvellement automatique :**
   ```bash
   sudo certbot renew --dry-run
   ```

Votre site est maintenant en ligne, sécurisé avec SSL, et prêt à accueillir vos visiteurs !
