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
    En este proyecto tuve la oportunidad de crear el frontend
    con React usando Redux, Weather Application te permite
    crear una cuenta para acceder a los servicios meteorológicos por más de
    200 ciudades del mundo en tiempo real`,
		specialty: 'Frontend',
		icon: <FaPaintBrush size='15' />,
	},
	{
		id: 2,
		image: CuartoDeMilla,
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
		image: GrupoDot,
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
		image: Cycling,
		text_image: 'Imagen',
		title: 'Redux Cycling Manager',
		text: `Proyecto personal con React y Redux, puedes ser Tecnico del
    Ciclismo colombiano`,
		specialty: 'Frontend',
		icon: <CgCodeSlash />,
	},
	{
		id: 5,
		image: Covid19,
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
		image: Podcasts,
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
		image: Vienes,
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
		image: Babysitter,
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
