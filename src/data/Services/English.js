import React from 'react';
import {
	FaPaintBrush,
	FaCode,
	FaFigma,
	FaCloud,
} from 'react-icons/fa';

const DataServicesEnglish = [
	{
		id: 1,
		title: 'Frontend',
		text: `
		I am a Full Stack JavaScript Developer focused on
		the frontend, I like to handle the life cycle of
		web applications with React, I also like to use
		packers like Webpack, I have strong knowledge in
		HTML and CSS as well as preprocessors like SASS or Stylus.`,
		icon: <FaPaintBrush size='20' />,
	},
	{
		id: 2,
		title: 'Backend',
		text: `
		In the Back End, I have had the opportunity to use
		Node with its Express framework to generate API services
		with REST architecture, where I have managed to connect
		both relational and non-relational databases.`,
		icon: <FaCode size='20' />,
	},
	{
		id: 3,
		title: 'Cloud',
		text: `
		In the Cloud world I have generally used different services
		to deploy applications and store information, some tools are
		Vercel, Firebase and Heroku for Frontend applications, also
		thanks to Heroku and AWS I have made deployments of APIs
		and instances to databases.`,
		icon: <FaCloud size='20' />,
	},
	{
		id: 4,
		title: 'UI designer',
		text: `
		As a Frontend Developer I have had to develop skills related
		to UI design, for this I use tools such as Figma and XD, with
		these I have managed to create prototypes for my different
		personal and professional projects.`,
		icon: <FaFigma size='20' />,
	},
];

export default DataServicesEnglish;
