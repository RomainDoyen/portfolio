import type { ImageMetadata } from 'astro';
import img5 from '../assets/projects/5.png';
import img6 from '../assets/projects/6.png';
import img7 from '../assets/projects/7.png';
import img8 from '../assets/projects/8.png';
import img10 from '../assets/projects/10.png';
import img11 from '../assets/projects/11.png';
import img12 from '../assets/projects/12.png';
import img14 from '../assets/projects/14.png';
import img15 from '../assets/projects/15.png';
import img16 from '../assets/projects/16.png';

export type Project = {
	id: number;
	title: string;
	description: string;
	technologies: string[];
	demoLink: string;
	repoLink: string;
	image: ImageMetadata;
};

export const projects: Project[] = [
	{
		id: 1,
		title: 'ProxyBioline',
		description:
			'Circuit court entre producteurs locaux et consommateurs, avec gestion des points de vente.',
		technologies: ['React', 'Leaflet', 'Tailwind CSS', 'PostgreSQL'],
		demoLink: '#',
		repoLink: 'https://github.com/RomainDoyen/proxibio-line',
		image: img10,
	},
	{
		id: 2,
		title: 'Boilerplate Flask',
		description:
			'Package Python générant un projet Flask structuré, prêt à être modifié et déployé.',
		technologies: ['Python', 'Flask'],
		demoLink: '#',
		repoLink: 'https://github.com/RomainDoyen/boilerplate-flask',
		image: img5,
	},
	{
		id: 3,
		title: "Dodo'Cuisto",
		description:
			'Application de recettes créoles avec favoris, partage et notation.',
		technologies: ['Java', 'Android', 'Swift', 'SQLite'],
		demoLink: '#',
		repoLink: 'https://github.com/RomainDoyen/DodoCuistoAndroid',
		image: img7,
	},
	{
		id: 4,
		title: 'Plateforme e-commerce',
		description: 'Boutique en ligne complète avec catalogue et gestion des commandes.',
		technologies: ['Laravel', 'MySQL', 'Tailwind CSS'],
		demoLink: '#',
		repoLink: 'https://github.com/RomainDoyen/laravel-ecommerce',
		image: img14,
	},
	{
		id: 5,
		title: 'Design And Creation',
		description: 'Portfolio de dessins et logos mettant en avant mes créations graphiques.',
		technologies: ['React', 'Firebase', 'Sass'],
		demoLink: 'https://designandcreation.vercel.app/',
		repoLink: 'https://github.com/RomainDoyen/designandcreation-react',
		image: img6,
	},
	{
		id: 6,
		title: 'TodoList',
		description: 'Extension navigateur pour gérer des tâches au quotidien.',
		technologies: ['React', 'PostgreSQL', 'Chrome Extension'],
		demoLink: '#',
		repoLink: 'https://github.com/RomainDoyen/todolist-extension',
		image: img8,
	},
	{
		id: 7,
		title: 'Storm Tracker',
		description: 'Suivi des tempêtes en temps réel sur carte interactive.',
		technologies: ['Flask', 'Leaflet', 'PostgreSQL'],
		demoLink: '#',
		repoLink: 'https://github.com/RomainDoyen/storm-tracker',
		image: img11,
	},
	{
		id: 8,
		title: 'Sweet Organic',
		description: 'Boutique en ligne de bonbons bio avec architecture microservices.',
		technologies: ['React', 'Docker', 'MySQL', 'ExpressJS'],
		demoLink: '#',
		repoLink: 'https://github.com/Zalxio/SweetOrganic',
		image: img12,
	},
	{
		id: 9,
		title: 'Poulets Grillés',
		description: 'Localisation des vendeurs de poulets grillés à proximité.',
		technologies: ['React Native', 'Appwrite'],
		demoLink: '#',
		repoLink: 'https://github.com/RomainDoyen/chicken-grills',
		image: img15,
	},
	{
		id: 10,
		title: 'Ice Creams',
		description: 'Application mobile pour commander des glaces et localiser les magasins.',
		technologies: ['Flutter', 'Android', 'Figma'],
		demoLink: '#',
		repoLink: 'https://github.com/RomainDoyen/ice_creams',
		image: img16,
	},
];
