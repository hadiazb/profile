import React from 'react';
import './style.scss';
import Skills from '../Skills/index';
import Services from '../Services/index';
import Bullets from '../Bullets/index';

const AboutMe = () => {
	return (
		<div className='about'>
			<h3>About Me</h3>
			<div className='about__content'>
				<p>
					Engineer Mechanic from National University of Colombia.
					Specialized in technologies web, Frontend developer in
					React and MERN Stack. I think a autodidact person with
					great passion for the world of technology.
				</p>

				<Bullets />
				<Services />
				<Skills />
			</div>
		</div>
	);
};

export default AboutMe;
