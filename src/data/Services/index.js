import React from 'react';
import {
	FaPaintBrush,
	FaCode,
	FaFigma,
	FaCloud,
} from 'react-icons/fa';

const DataServices = [
	{
		id: 1,
		title: 'Frontend',
		text: `Lorem ipsum, dolor sit amet consectetur adipisicing
  elit. Sunt ad obcaecati voluptatibus nisi similique
  libero.`,
		icon: <FaPaintBrush size='20' />,
	},
	{
		id: 2,
		title: 'Backend',
		text: `Lorem ipsum, dolor sit amet consectetur adipisicing
  elit. Sunt ad obcaecati voluptatibus nisi similique
  libero.`,
		icon: <FaCode size='20' />,
	},
	{
		id: 3,
		title: 'Cloud',
		text: `Lorem ipsum, dolor sit amet consectetur adipisicing
  elit. Sunt ad obcaecati voluptatibus nisi similique
  libero.`,
		icon: <FaFigma size='20' />,
	},
	{
		id: 4,
		title: 'UI designer',
		text: `Lorem ipsum, dolor sit amet consectetur adipisicing
  elit. Sunt ad obcaecati voluptatibus nisi similique
  libero.`,
		icon: <FaCloud size='20' />,
	},
];

export default DataServices;
