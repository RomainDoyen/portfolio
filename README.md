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

## SEO

`SITE_URL` est requis pour le sitemap, `robots.txt`, l’URL canonique et les balises Open Graph.

```env
SITE_URL=https://romaindoyen.netlify.app
```

### Généré au build

- **`/sitemap.xml`** — plan du site
- **`/robots.txt`** — indexation + lien vers le sitemap

### Métadonnées (fichier `src/data/seo.ts`)

- Titre, description, mots-clés, auteur
- URL canonique, Open Graph, Twitter Card
- JSON-LD : `Person`, `WebSite`, `ProfilePage`
- Image de partage : `public/og.png`

### Après déploiement

1. [Google Search Console](https://search.google.com/search-console) — soumettre `/sitemap.xml`
2. [Rich Results Test](https://search.google.com/test/rich-results) — valider les données structurées
3. [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) — rafraîchir l’aperçu OG

## Google Analytics

1. Créer une propriété **GA4** sur [Google Analytics](https://analytics.google.com/).
2. Copier l’ID de mesure (format `G-XXXXXXXXXX`).
3. Renseigner la variable dans `.env` :

```env
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Le script n’est injecté qu’en **production** (`astro build` / déploiement), pas en `astro dev`, pour éviter de polluer les statistiques pendant le développement.

Sur l’hébergeur (Vercel, Netlify, etc.), définir la même variable d’environnement dans les paramètres du projet.
