import React from 'react';
import {
	FaPaintBrush,
	FaCode,
	FaFigma,
	FaCloud,
} from 'react-icons/fa';

const Services = () => {
	return (
		<div className='about__content-services'>
			<h4>Services</h4>
			<div className='task'>
				<div className='task__item'>
					<h5>Frontend</h5>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Sunt ad obcaecati voluptatibus nisi similique
						libero.
					</p>
					<div className='task__item-icon'>
						<div className='icon'>
							<FaPaintBrush size='20' />
						</div>
					</div>
				</div>
				<div className='task__item'>
					<h5>Backend</h5>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Sunt ad obcaecati voluptatibus nisi similique
						libero.
					</p>
					<div className='task__item-icon'>
						<div className='icon'>
							<FaCode size='20' />
						</div>
					</div>
				</div>
				<div className='task__item'>
					<h5>UI Designer</h5>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Sunt ad obcaecati voluptatibus nisi similique
						libero.
					</p>
					<div className='task__item-icon'>
						<div className='icon'>
							<FaFigma size='20' />
						</div>
					</div>
				</div>
				<div className='task__item'>
					<h5>Cloud</h5>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Sunt ad obcaecati voluptatibus nisi similique
						libero.
					</p>
					<div className='task__item-icon'>
						<div className='icon'>
							<FaCloud size='20' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
