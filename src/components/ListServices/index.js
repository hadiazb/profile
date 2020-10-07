import React from 'react';
import DataServices from '../../data/Services/index';

const ListServices = () => {
	return (
		<div className='about__content-services'>
			<h4>Services</h4>
			<div className='task'>
				{DataServices.map((item) => (
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
