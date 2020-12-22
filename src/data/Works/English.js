import React from 'react';
import { CgFigma, CgCodeSlash } from 'react-icons/cg';
import { FaPaintBrush } from 'react-icons/fa';

const DataWorks = [
	{
		id: 1,
		image:
			'https://firebasestorage.googleapis.com/v0/b/portafolio-a8d13.appspot.com/o/Potafolio%2FWorks%2Fweather.png?alt=media&token=79e8871f-b6da-41b8-97fa-d40a2f2c2e1d',
		text_image: 'Imagen',
		title: 'Global Weather Application',
		text: `
		In this project I had the opportunity to create the frontend
		with React using Redux, Weather Application allows you to
		create an account to access Weather services for more than
		200 cities in the world in real time`,
		specialty: 'Frontend',
		icon: <FaPaintBrush size='15' />,
	},
	{
		id: 2,
		image:
			'https://firebasestorage.googleapis.com/v0/b/portafolio-a8d13.appspot.com/o/Potafolio%2FWorks%2FCuartodemilla.png?alt=media&token=90deac09-1096-4e3e-916e-201dc747b72c',
		text_image: 'Imagen',
		title: '1/4 de Milla',
		text: `
		Project developed in React and Python django to inform all
		users who are in the Mexican territory about fuel costs,
		here you can make reports, create suggestions and much more`,
		specialty: 'Frontend',
		icon: <CgCodeSlash />,
	},
	{
		id: 3,
		image:
			'https://firebasestorage.googleapis.com/v0/b/portafolio-a8d13.appspot.com/o/Potafolio%2FWorks%2Fgrupodot.png?alt=media&token=902b1f0b-21fd-4bcf-97f6-091afdbbc7b1',
		text_image: 'Imagen',
		title: 'Search weather city',
		text: `In this project I had the opportunity to create the frontend
		with React using Redux, Webpack and more tools.`,
		specialty: 'Frontend',
		icon: <CgFigma />,
	},
	{
		id: 4,
		image:
			'https://firebasestorage.googleapis.com/v0/b/portafolio-a8d13.appspot.com/o/Potafolio%2FWorks%2Fcycling.png?alt=media&token=6b85a502-bea2-42fd-bcad-5f9a661a3f0d',
		text_image: 'Imagen',
		title: 'Redux Cycling Manager',
		text: `Personal project with React and Redux, you can be Colombian Cycling
		Manager`,
		specialty: 'Frontend',
		icon: <CgCodeSlash />,
	},
	{
		id: 5,
		image:
			'https://firebasestorage.googleapis.com/v0/b/portafolio-a8d13.appspot.com/o/Potafolio%2FWorks%2Fcovid19.png?alt=media&token=e2a79c31-2ff4-4d4d-9869-6ff3ee3209f6',
		text_image: 'Imagen',
		title: 'USA Covid 19 ',
		text: `In this project I had the opportunity to create the frontend
		with React using Styled components by styles, you can see the google
		map application.`,
		specialty: 'UI',
		icon: <CgCodeSlash />,
	},
	{
		id: 6,
		image:
			'https://firebasestorage.googleapis.com/v0/b/portafolio-a8d13.appspot.com/o/Potafolio%2FWorks%2Fpodcasts.png?alt=media&token=7b8660de-753a-462e-9375-a63e73eeda4d',
		text_image: 'Imagen',
		title: 'Podcasts',
		text: `The podcast project is make in Next.js, you can listening different
		podcast about many topic.`,
		specialty: 'Backend',
		icon: <FaPaintBrush size='15' />,
	},
	{
		id: 7,
		image:
			'https://firebasestorage.googleapis.com/v0/b/portafolio-a8d13.appspot.com/o/Potafolio%2FWorks%2Fvienes.png?alt=media&token=984d5ec2-8239-4ed1-b4a8-ace5ba8d8df0',
		text_image: 'Imagen',
		title: 'Vienes',
		text: `
		Project to inform about the different roots that the Mexican
		government misguided to sell and repair the state. Here React
		was used with Material UI`,
		specialty: 'Frontend',
		icon: <CgCodeSlash />,
	},
	{
		id: 8,
		image:
			'https://firebasestorage.googleapis.com/v0/b/portafolio-a8d13.appspot.com/o/Potafolio%2FWorks%2Fbabysitter.png?alt=media&token=9336908e-892c-4097-8df7-99c0a5e37fac',
		text_image: 'Imagen',
		title: 'BabySitter Finder',
		text: `
		In this project I had the opportunity to create the backend
		using Node.js with Express to design the API, in this project
		database services were integrated in MySQL with a server which
		also communicates with a Front developed in React`,
		specialty: 'Backend',
		icon: <FaPaintBrush size='15' />,
	},
];

export default DataWorks;
