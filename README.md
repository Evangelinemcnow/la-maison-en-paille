# La Maison en Paille

Site vitrine et dashboard admin pour André de Bouter — formateur en construction écologique. Les visiteurs peuvent consulter les formations, les dates de stages disponibles et envoyer une demande d'inscription. André dispose d'un tableau de bord pour gérer le contenu du site.

## Prérequis

- Node.js v18+
- MySQL 8+
- npm

## Installation

1. Clonez le dépôt :

```bash
git https://github.com/Koraya964/La-maison-en-paille-Stage/
cd la-maison-en-paille
```

2. Installez les dépendances backend :

```bash
cd server
npm install
```

3. Installez les dépendances frontend :

```bash
cd ../client
npm install
```

4. Configurez les variables d'environnement — créez un fichier `.env` dans `/server` :

```env
PORT=5000
DB_HOST=localhost
DB_USER=db_user
DB_PASSWORD=db_mot_de_passe
DB_NAME=la_maison_en_paille
JWT_SECRET=un_secret_jwt
CLIENT_URL=http://localhost:3000
NODE_ENV=development
```

5. Importez la base de données :
   Ouvrez MySQL Workbench (ou phpMyAdmin) et importez `la_maison_en_paille.sql`

6. Créez le compte administrateur (à faire une seule fois) :

```bash
cd server
node scripts/createAdmin.js
```

7. Lancez le backend depuis `/backend` :

```bash
npm run dev
```

8. Lancez le frontend depuis `/client` dans un second terminal :

```bash
npm run dev
```

9. Ouvrez le navigateur sur `http://localhost:3000`

## Technologies utilisées

**Backend**

- Node.js / Express
- MySQL + pool de connexions (mysql2)
- JWT (token 7 jours, cookie httpOnly)
- Argon2 (hachage des mots de passe)
- Nodemailer (envoi d'e-mails)

**Frontend**

- Next.js 14 (App Router)
- React (Server & Client Components)
- Tailwind CSS

**Déploiement**

- Render (hébergement Express + Next.js)
- Railway (MySQL cloud)

## Fonctionnalités

**Site public**

- Pages de présentation des formations (Poêle de Masse, Paille-Terre-Chaux, Photovoltaïque)
- Calendrier des stages avec places disponibles
- Formulaire d'inscription aux stages (multi-étapes)
- Actualités et blog
- Galerie des réalisations
- Partage de réalisations par les visiteurs
- Page de contact

**Dashboard admin** (accès `/login`)

- Gestion des formations et des stages : ajout, modification, suppression
- Gestion des actualités : rédaction, publication, suppression
- Suivi des inscriptions : liste, changement de statut (confirmée / annulée)
- Gestion de la galerie : upload et suppression de photos
- Modération des réalisations soumises par les visiteurs
- Protection automatique par middleware JWT — toute tentative d'accès sans connexion redirige vers `/login`

## Structure du projet

```
la-maison-en-paille/
├── server/
│   ├── scripts/
│   │   └── createAdmin.js
│   └── src/
│       ├── app.js
│       ├── controllers/
│       ├── lib/
│       │   ├── db.js
│       │   ├── auth.js
│       │   ├── mails/
│       │   └── models/
│       ├── middlewares/
│       ├── public/
│       │   └── images/
│       ├── routes/
│       └── services/
│           └── mailer.js
└── client/
    ├── app/
    │   ├── (public)/
    │   └── (admin)/
    ├── components/
    │   ├── admin/
    │   ├── layout/
    │   └── public/
    └── lib/
        └── api/
```

---

_Projet réalisé dans le cadre du stage AFEC Angoulême 2026_  
_Stack : Node.js · Express · Next.js 14 · MySQL · JWT · Render · Railway_
