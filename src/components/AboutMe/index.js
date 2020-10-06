import React from 'react';
import './style.scss';
import Skills from '../Skills/index';
import Services from '../Services/index';
import Bullets from '../Bullets/index';
import Tools from '../Tools/index';
import { GiGraduateCap } from 'react-icons/gi';
import { VscSettingsGear } from 'react-icons/vsc';
import {
	FaUniversity,
	FaCode,
	FaUserGraduate,
} from 'react-icons/fa';

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
				<Tools />

				<div className='about__content-education'>
					<h4>Education</h4>
					<div className='education'>
						<ul className='education__list'>
							<li className='education__list-item'>
								<div className='icon__style'>
									<GiGraduateCap size='25' />
								</div>
								<span>
									Optomecatronica <a href='https://cio.mx/'>CIO</a>
								</span>
							</li>
							<li className='education__list-item'>
								<div className='icon__style'>
									<VscSettingsGear size='20' />
								</div>
								<span>
									Engineer Mechanic
									<a href='https://unal.edu.co/'> UNAL </a>
								</span>
							</li>
							<li className='education__list-item'>
								<div className='icon__style'>
									<FaUniversity size='20' />
								</div>
								<span>
									Bachelor of Mathematics
									<a href='http://www.pedagogica.edu.co/'> UPN </a>
								</span>
							</li>
							<li className='education__list-item'>
								<div className='icon__style'>
									<FaCode size='20' />
								</div>
								<span>
									Software Dev{' '}
									<a href='https://platzi.com/'> Platzi</a>
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
