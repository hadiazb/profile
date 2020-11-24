import React from 'react';
import {
	FaPaintBrush,
	FaCode,
	FaFigma,
	FaCloud,
} from 'react-icons/fa';

const DataServicesSpanish = [
	{
		id: 1,
		title: 'Frontend',
		text: `
			Soy un desarrollador de JavaScript Full Stack enfocado en el
			desarrollo de interfazes, me gusta manejar el ciclo de vida de
      aplicaciones web con React, también me gusta usar
      empacadores como Webpack, tengo un gran conocimiento en
      HTML y CSS, así como preprocesadores como SASS o Stylus.`,
		icon: <FaPaintBrush size='20' />,
	},
	{
		id: 2,
		title: 'Backend',
		text: `
      En el Back End, tuve la oportunidad de usar
      Node con su framework Express para generar servicios API
      con arquitectura REST, donde he logrado conectar servicios como
      bases de datos tanto relacionales como no relacionales.`,
		icon: <FaCode size='20' />,
	},
	{
		id: 3,
		title: 'Cloud',
		text: `
    En el mundo de la nube, generalmente he usado diferentes servicios
    para implementar aplicaciones y almacenar información, algunas
    herramientas son Vercel, Firebase y Heroku para aplicaciones
    Frontend, también gracias a Heroku y AWS he realizado despliegues
    de APIs e instancias a bases de datos.`,
		icon: <FaCloud size='20' />,
	},
	{
		id: 4,
		title: 'UI designer',
		text: `
    Como Desarrollador Frontend he tenido que desarrollar habilidades relacionadas
    al diseño de UI, para ello utilizo herramientas como Figma y XD, con
    estos he logrado crear prototipos para mis diferentes
    proyectos personales y profesionales.`,
		icon: <FaFigma size='20' />,
	},
];

export default DataServicesSpanish;
