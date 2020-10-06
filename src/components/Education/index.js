import React from 'react';
import { GiGraduateCap } from 'react-icons/gi';
import { VscSettingsGear } from 'react-icons/vsc';
import { FaUniversity, FaCode } from 'react-icons/fa';

const Education = () => {
	return (
		<div className='about__content-education'>
			<h4>Education</h4>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing
				elit. Deleniti eos, quaerat maiores tempore dolorum
				fugiat.
			</p>
			<div className='education'>
				<ul className='education__list'>
					<li className='education__list-item'>
						<div className='icon__style'>
							<GiGraduateCap size='25' />
						</div>
						<span>
							Optomecatronica{' '}
							<a
								href='https://cio.mx/'
								target='_blank'
								rel='noopener noreferrer'
							>
								CIO
							</a>
						</span>
					</li>
					<li className='education__list-item'>
						<div className='icon__style'>
							<VscSettingsGear size='20' />
						</div>
						<span>
							Engineer Mechanic
							<a
								href='https://unal.edu.co/'
								target='_blank'
								rel='noopener noreferrer'
							>
								{' '}
								UNAL{' '}
							</a>
						</span>
					</li>
					<li className='education__list-item'>
						<div className='icon__style'>
							<FaUniversity size='20' />
						</div>
						<span>
							Bachelor of Mathematics
							<a
								href='http://www.pedagogica.edu.co/'
								target='_blank'
								rel='noopener noreferrer'
							>
								{' '}
								UPN{' '}
							</a>
						</span>
					</li>
					<li className='education__list-item'>
						<div className='icon__style'>
							<FaCode size='20' />
						</div>
						<span>
							Software Dev{' '}
							<a
								href='https://platzi.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								{' '}
								Platzi
							</a>
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Education;
