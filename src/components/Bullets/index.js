import React from 'react';

const Bullets = (props) => {
	return (
		<div className='about__content-bullets'>
			<div className='bullet__content'>
				<h5>{props.language ? 'AGE' : 'EDAD'}</h5>
				<h5 className='bullet__content-response'>30</h5>
			</div>
			<div className='bullet__content'>
				<h5>{props.language ? 'RESIDENCE' : 'RECIDENCIA'}</h5>
				<h5 className='bullet__content-response'>Colombia</h5>
			</div>
			<div className='bullet__content'>
				<h5>{props.language ? 'FREELANCE' : 'FREELANCE'}</h5>
				<h5 className='bullet__content-response'>
					{props.language ? 'Available' : 'Disponible'}
				</h5>
			</div>
			<div className='bullet__content'>
				<h5>{props.language ? 'ADDRESS' : 'CIUDAD'}</h5>
				<h5 className='bullet__content-response'>Bogota</h5>
			</div>
		</div>
	);
};

export default Bullets;
