# Portfolio

Site portfolio (Astro + Tailwind).

## Configuration

Copier le fichier d’exemple et renseigner les variables :

```bash
cp .env.example .env
```

| Variable | Usage |
|----------|--------|
| `SITE_URL` | URL canonique du site (sitemap, robots.txt) |
| `PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 |

`SITE_URL` est requis pour générer `sitemap.xml` et `robots.txt` au build (`astro build`).

## SEO (sitemap & robots)

Au build, Astro génère automatiquement :

- **`/sitemap.xml`** — liste des pages du site
- **`/robots.txt`** — autorise l’indexation et pointe vers le sitemap

Définir `SITE_URL` dans `.env` (et sur l’hébergeur) avec l’URL de production, par exemple :

```env
SITE_URL=https://romaindoyen.netlify.app
```

## Google Analytics

1. Créer une propriété **GA4** sur [Google Analytics](https://analytics.google.com/).
2. Copier l’ID de mesure (format `G-XXXXXXXXXX`).
3. Renseigner la variable dans `.env` :

```env
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Le script n’est injecté qu’en **production** (`astro build` / déploiement), pas en `astro dev`, pour éviter de polluer les statistiques pendant le développement.

Sur l’hébergeur (Vercel, Netlify, etc.), définir la même variable d’environnement dans les paramètres du projet.
