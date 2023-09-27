import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import amazonClone from './assets/amazonClone.jpg';
import mealsApp from './assets/mealsApp.jpg';
import stockTracker from './assets/stockTracker.jpg';

export const links = [
	{ id: nanoid(), href: '#home', text: 'home' },
	{ id: nanoid(), href: '#skills', text: 'skills' },
	{ id: nanoid(), href: '#about', text: 'about' },
	{ id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
	{
		id: nanoid(),
		icon: <FaHtml5 className='h-16 w-16 text-orange-600' />,
		title: 'Html/Css',
		description:
			'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
	},
	{
		id: nanoid(),
		icon: <FaJs className='h-16 w-16 text-yellow-300' />,
		title: 'JavaScript',
		description:
			'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
	},
	{
		id: nanoid(),
		icon: <FaReact className='h-16 w-16 text-blue-500' />,
		title: 'React',
		description:
			'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
	},
];

export const projects = [
	{
		id: nanoid(),
		image: amazonClone,
		url: 'https://challenge-1d80d.web.app/',
		github: 'https://github.com/Birajthapa/amazon-clone',
		title: 'first project',
		text: 'Clone-Amazon.',
	},
	{
		id: nanoid(),
		image: stockTracker,
		url: 'https://6513b8e850ade257e53dbff6--resilient-sprinkles-6e5f89.netlify.app/',
		github: 'https://github.com/Birajthapa/Stock-Tracker',
		title: 'second project',
		text: 'Stock-trading made easy',
	},
	{
		id: nanoid(),
		image: mealsApp,
		url: 'https://app.netlify.com/sites/mellifluous-malabi-ac3a4d/overview',
		github: 'https://github.com/Birajthapa/meals-favourite',
		title: 'third project',
		text: 'Save your meals',
	},
];
