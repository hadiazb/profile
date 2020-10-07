import React from 'react';
import './style.scss';
import Skills from '../Skills/index';
import ListServices from '../ListServices/index';
import Bullets from '../Bullets/index';
import Tools from '../Tools/index';
import Education from '../Education';

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
				<ListServices />
				<Skills />
				<Tools />
				<Education />
			</div>
		</div>
	);
};

export default AboutMe;
