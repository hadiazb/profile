import React from 'react';
import { CgFigma, CgCodeSlash } from 'react-icons/cg';
import { FaPaintBrush } from 'react-icons/fa';
// import Image from '../../assets/programing.jpg';
import WeatherLogin from '../../assets/Projects/weather.png';
import CuartoDeMilla from '../../assets/Projects/Cuartodemilla.png';
import GrupoDot from '../../assets/Projects/grupodot.png';
import Cycling from '../../assets/Projects/cycling.png';
import Covid19 from '../../assets/Projects/covid19.png';
import Podcasts from '../../assets/Projects/podcasts.png';
import Vienes from '../../assets/Projects/vienes.png';
import Babysitter from '../../assets/Projects/babysitter.png';

const DataWorks = [
	{
		id: 1,
		image: WeatherLogin,
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
		image: CuartoDeMilla,
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
		image: GrupoDot,
		text_image: 'Imagen',
		title: 'Search weather city',
		text: `In this project I had the opportunity to create the frontend
		with React using Redux, Webpack and more tools.`,
		specialty: 'Frontend',
		icon: <CgFigma />,
	},
	{
		id: 4,
		image: Cycling,
		text_image: 'Imagen',
		title: 'Redux Cycling Manager',
		text: `Personal project with React and Redux, you can be Colombian Cycling
		Manager`,
		specialty: 'Frontend',
		icon: <CgCodeSlash />,
	},
	{
		id: 5,
		image: Covid19,
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
		image: Podcasts,
		text_image: 'Imagen',
		title: 'Podcasts',
		text: `The podcast project is make in Next.js, you can listening different
		podcast about many topic.`,
		specialty: 'Backend',
		icon: <FaPaintBrush size='15' />,
	},
	{
		id: 7,
		image: Vienes,
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
		image: Babysitter,
		text_image: 'Imagen',
		title: 'BabySitter Finder',
		text: `
		In this project I had the opportunity to create the backend
		using Node.js with Express to design the API, in this project
		database services were integrated in MySQL with a server which
		also communicates with a Front developed in React`,
		specialty: 'Backend',
		icon: <FaPaintBrush size='15' />,
	}
];

export default DataWorks;
