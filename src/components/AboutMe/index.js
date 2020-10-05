import React from 'react';
import './style.scss';

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

				<div className='about__content-bullets'>
					<div className='bullet__content'>
						<h5>AGE</h5>
						<h5 className='bullet__content-response'>30</h5>
					</div>
					<div className='bullet__content'>
						<h5>RESIDENCE</h5>
						<h5 className='bullet__content-response'>Colombia</h5>
					</div>
					<div className='bullet__content'>
						<h5>FREELANCE</h5>
						<h5 className='bullet__content-response'>
							Available
						</h5>
					</div>
					<div className='bullet__content'>
						<h5>ADDRESS</h5>
						<h5 className='bullet__content-response'>Bogota</h5>
					</div>
				</div>
				<div className='about__content-services'>
					<h4>Services</h4>
					<div className='task'>
						<div className='task__item'>
							<div className='task__item-header'>
								<h5>Frontend</h5>
								<h6>Icon</h6>
							</div>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Sunt ad obcaecati voluptatibus nisi similique
								libero.
							</p>
						</div>
						<div className='task__item'>
							<div className='task__item-header'>
								<h5>Backend</h5>
								<h6>Icon</h6>
							</div>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Sunt ad obcaecati voluptatibus nisi similique
								libero.
							</p>
						</div>
						<div className='task__item'>
							<div className='task__item'>
								<h5>UI Designer</h5>
								<h6>Icon</h6>
							</div>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Sunt ad obcaecati voluptatibus nisi similique
								libero.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
