export type SkillCategory = {
	label: string;
	items: string[];
};

export const skillCategories: SkillCategory[] = [
	{
		label: 'Frontend',
		items: ['React', 'TypeScript', 'Tailwind', 'WordPress', 'Flutter'],
	},
	{
		label: 'Backend',
		items: ['NestJS', 'SQL', 'PostgreSQL', 'Firebase', 'Laravel'],
	},
	{
		label: 'UI/UX & Design',
		items: ['Figma', 'Canva'],
	},
	{
		label: 'Outils',
		items: ['Git', 'Bash'],
	},
];

export const highlights = [
	{
		icon: 'mdi:console',
		title: 'Fullstack',
		description: "Maîtrise de l'ensemble de la stack, du front au déploiement.",
	},
	{
		icon: 'mdi:palette',
		title: 'Designer',
		description: 'Sensibilité visuelle pour des interfaces soignées et cohérentes.',
	},
];

export const aboutIntro =
	"Développeur fullstack basé à La Réunion, j'accompagne les projets web de la conception à la mise en production. Mon approche allie rigueur technique, code maintenable et interfaces soignées.";
