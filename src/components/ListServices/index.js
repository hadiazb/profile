import React from 'react';
import DataServicesEnglish from '../../data/Services/English';
import DataServicesSpanish from '../../data/Services/Spanish';

const ListServices = (props) => {
	return (
		<div className='about__content-services'>
			<h4>{props.language ? 'Services' : 'Servicios'}</h4>
			<div className='task'>
				{props.language
					? DataServicesEnglish.map((item) => (
							<div className='task__item' key={item.id}>
								<h5>{item.title}</h5>
								<p>{item.text}</p>
								<div className='task__item-icon'>
									<div className='icon'>{item.icon}</div>
								</div>
							</div>
					  ))
					: DataServicesSpanish.map((item) => (
							<div className='task__item' key={item.id}>
								<h5>{item.title}</h5>
								<p>{item.text}</p>
								<div className='task__item-icon'>
									<div className='icon'>{item.icon}</div>
								</div>
							</div>
					  ))}
			</div>
		</div>
	);
};

export default ListServices;
