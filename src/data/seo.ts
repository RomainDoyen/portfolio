import { skillCategories } from './about';
import { contactEmail, footerLinks } from './footer';

export const siteConfig = {
	name: 'Romain Doyen',
	title: 'Romain Doyen | Développeur Fullstack',
	description:
		'Portfolio de Romain Doyen — développeur fullstack React, TypeScript et Node.js à La Réunion. Projets web et mobile, de la conception à la mise en production.',
	jobTitle: 'Développeur Fullstack',
	location: {
		locality: 'La Réunion',
		country: 'FR',
	},
	locale: 'fr_FR',
	language: 'fr',
	ogImage: '/og.png',
	ogImageAlt: 'Romain Doyen — développeur fullstack',
	keywords: [
		'développeur fullstack',
		'React',
		'TypeScript',
		'Node.js',
		'NestJS',
		'La Réunion',
		'portfolio développeur',
		'freelance web',
	],
} as const;

export const knowsAbout = skillCategories.flatMap((c) => c.items);

export function buildJsonLd(siteOrigin: string) {
	const url = `${siteOrigin}/`;
	const image = `${siteOrigin}${siteConfig.ogImage}`;

	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				'@id': `${url}#website`,
				url,
				name: siteConfig.name,
				description: siteConfig.description,
				inLanguage: 'fr-FR',
			},
			{
				'@type': 'Person',
				'@id': `${url}#person`,
				name: siteConfig.name,
				jobTitle: siteConfig.jobTitle,
				url,
				image,
				email: `mailto:${contactEmail}`,
				address: {
					'@type': 'PostalAddress',
					addressRegion: siteConfig.location.locality,
					addressCountry: siteConfig.location.country,
				},
				sameAs: footerLinks.map((l) => l.href),
				knowsAbout,
			},
			{
				'@type': 'ProfilePage',
				'@id': `${url}#webpage`,
				url,
				name: siteConfig.title,
				description: siteConfig.description,
				inLanguage: 'fr-FR',
				isPartOf: { '@id': `${url}#website` },
				about: { '@id': `${url}#person` },
				mainEntity: { '@id': `${url}#person` },
			},
		],
	};
}
