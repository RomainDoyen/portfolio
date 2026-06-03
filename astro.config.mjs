// @ts-check
import { defineConfig } from 'astro/config';
import { writeFileSync, copyFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL;

/** @type {import('astro').AstroIntegration} */
function robotsTxt() {
	return {
		name: 'robots-txt',
		hooks: {
			'astro:build:done': ({ dir }) => {
				if (!site) return;

				const base = site.replace(/\/$/, '');
				const out = fileURLToPath(dir);

				const singlePath = new URL('sitemap-0.xml', dir);
				const sitemapPath = new URL('sitemap.xml', dir);

				if (existsSync(singlePath)) {
					copyFileSync(singlePath, sitemapPath);
				}

				writeFileSync(
					new URL('robots.txt', dir),
					`User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`,
					'utf8',
				);
			},
		},
	};
}

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [
		icon(),
		sitemap({
			changefreq: 'monthly',
			priority: 1,
			lastmod: new Date(),
		}),
		robotsTxt(),
	],
});
