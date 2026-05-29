import type { ImageMetadata } from 'astro';
import ur from '../assets/companies/ur.png';
import flaxib from '../assets/companies/flaxib.jpg';
import sc from '../assets/companies/sc.png';
import hivewapp from '../assets/companies/hivewapp.jpg';

export type Experience = {
	id: number;
	role: string;
	company: string;
	period: string;
	description: string;
	tags: string[];
	image: ImageMetadata;
};

export const experiences: Experience[] = [
	{
		id: 1,
		role: 'Backend Developer',
		company: 'Centre Sécurité Requin',
		period: 'Janvier 2024 — Juin 2024',
		description:
			"Développement d'une interface pour la génération de filets anti-requin et d'outils de conception pour l'analyse mécanique.",
		tags: ['Python', 'Orcaflex', 'Deeplines'],
		image: sc,
	},
	{
		id: 2,
		role: 'Designer',
		company: 'Hivewapp',
		period: 'Septembre 2023 — Novembre 2023',
		description:
			"Rédaction et design d'un livre blanc sur le No code / Low code pour une audience professionnelle.",
		tags: ['Figma', 'Canva', 'Node.js'],
		image: hivewapp,
	},
	{
		id: 3,
		role: 'Fullstack Developer',
		company: 'D2IP (Université de La Réunion)',
		period: 'Janvier 2023 — Mars 2023',
		description:
			"Reprise et évolution d'une application de bulletins scolaires avec une architecture scalable.",
		tags: ['AngularJS', 'PHP', 'MySQL'],
		image: ur,
	},
	{
		id: 4,
		role: 'Backend Developer',
		company: 'Flaxib',
		period: 'Septembre 2022 — Novembre 2022',
		description:
			"Application web de calcul d'itinéraires optimaux pour les transports scolaires.",
		tags: ['Python', 'Node.js', 'Docker'],
		image: flaxib,
	},
];
