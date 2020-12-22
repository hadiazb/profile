import React from 'react';
import { CgFigma, CgCodeSlash } from 'react-icons/cg';
import { FaPaintBrush } from 'react-icons/fa';

const DataWorks = [
	{
		id: 1,
		image: 'https://firebasestorage.googleapis.com/v0/b/portafolio-a8d13.appspot.com/o/Potafolio%2FWorks%2Fweather.png?alt=media&token=79e8871f-b6da-41b8-97fa-d40a2f2c2e1d',
		text_image: 'Imagen',
		title: 'Global Weather Application',
		text: `
    En este proyecto tuve la oportunidad de crear el frontend
    con React usando Redux, Weather Application te permite
    crear una cuenta para acceder a los servicios meteorológicos por más de
    200 ciudades del mundo en tiempo real`,
		specialty: 'Frontend',
		icon: <FaPaintBrush size='15' />,
	},
	{
		id: 2,
		image: 'https://firebasestorage.googleapis.com/v0/b/portafolio-a8d13.appspot.com/o/Potafolio%2FWorks%2FCuartodemilla.png?alt=media&token=90deac09-1096-4e3e-916e-201dc747b72c',
		text_image: 'Imagen',
		title: '1/4 de Milla',
		text: `
    Proyecto desarrollado en React y Python django para informar a todos
    usuarios que se encuentran en territorio mexicano sobre costos de combustible,
    aquí puedes hacer informes, crear sugerencias y mucho más`,
		specialty: 'Frontend',
		icon: <CgCodeSlash />,
	},
	{
		id: 3,
		image: 'https://firebasestorage.googleapis.com/v0/b/portafolio-a8d13.appspot.com/o/Potafolio%2FWorks%2Fgrupodot.png?alt=media&token=902b1f0b-21fd-4bcf-97f6-091afdbbc7b1',
		text_image: 'Imagen',
		title: 'Search weather city',
		text: `
    En este proyecto tuve la oportunidad de crear el frontend
    con React usando Redux, Webpack y más herramientas.`,
		specialty: 'Frontend',
		icon: <CgFigma />,
	},
	{
		id: 4,
		image: 'https://firebasestorage.googleapis.com/v0/b/portafolio-a8d13.appspot.com/o/Potafolio%2FWorks%2Fcycling.png?alt=media&token=6b85a502-bea2-42fd-bcad-5f9a661a3f0d',
		text_image: 'Imagen',
		title: 'Redux Cycling Manager',
		text: `Proyecto personal con React y Redux, puedes ser Tecnico del
    Ciclismo colombiano`,
		specialty: 'Frontend',
		icon: <CgCodeSlash />,
	},
	{
		id: 5,
		image: 'https://firebasestorage.googleapis.com/v0/b/portafolio-a8d13.appspot.com/o/Potafolio%2FWorks%2Fcovid19.png?alt=media&token=e2a79c31-2ff4-4d4d-9869-6ff3ee3209f6',
		text_image: 'Imagen',
		title: 'USA Covid 19 ',
		text: `En este proyecto tuve la oportunidad de crear el frontend
    con React usando componentes con estilo por estilos, puede ver el google
    aplicación de mapas.`,
		specialty: 'UI',
		icon: <CgCodeSlash />,
	},
	{
		id: 6,
		image: 'https://firebasestorage.googleapis.com/v0/b/portafolio-a8d13.appspot.com/o/Potafolio%2FWorks%2Fpodcasts.png?alt=media&token=7b8660de-753a-462e-9375-a63e73eeda4d',
		text_image: 'Imagen',
		title: 'Podcasts',
		text: `
    El proyecto de podcast está hecho en Next.js, puedes escuchar diferentes
    podcast sobre muchos temas.`,
		specialty: 'Backend',
		icon: <FaPaintBrush size='15' />,
	},
	{
		id: 7,
		image: 'https://firebasestorage.googleapis.com/v0/b/portafolio-a8d13.appspot.com/o/Potafolio%2FWorks%2Fvienes.png?alt=media&token=984d5ec2-8239-4ed1-b4a8-ace5ba8d8df0',
		text_image: 'Imagen',
		title: 'Vienes',
		text: `
    Proyecto para informar sobre las diferentes raíces que tiene el mexicano
    gobierno equivocado al vender y reparar el estado. Aquí reacciona
    se utilizó con Material UI`,
		specialty: 'Frontend',
		icon: <CgCodeSlash />,
	},
	{
		id: 8,
		image: 'https://firebasestorage.googleapis.com/v0/b/portafolio-a8d13.appspot.com/o/Potafolio%2FWorks%2Fbabysitter.png?alt=media&token=9336908e-892c-4097-8df7-99c0a5e37fac',
		text_image: 'Imagen',
		title: 'BabySitter Finder',
		text: `
    En este proyecto tuve la oportunidad de crear el backend
    usando Node.js con Express para diseñar la API, en este proyecto
    Los servicios de base de datos se integraron en MySQL con un servidor que
    también se comunica con un Frente desarrollado en React`,
		specialty: 'Backend',
		icon: <FaPaintBrush size='15' />,
	},
];

export default DataWorks;
