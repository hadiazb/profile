import React from 'react';
import './style.scss';
import Data from '../../data/Tutorials/index';

const Tutorial = () => {
	return (
		<div className='tutorials'>
			<h3>Tutorials</h3>
			<div className='tutorials__container'>
				<ul className='list'>
					{Data.map((item) => (
						<li key={item.id} className='list__item'>
							<div className='list__item-card'>
								<div className='image'>{item.icon}</div>
								<div className='content'>
									<h5>{item.title}</h5>
									<ul>
										<li>
											<h6>Topic</h6>
											<p>{item.topic}</p>
										</li>
										<li>
											<h6>Platform</h6>
											<p>{item.platform}</p>
										</li>
										<li>
											<h6>Time</h6>
											<p>{item.time}</p>
										</li>
										<li>
											<h6>Published</h6>
											<p>{item.published}</p>
										</li>
									</ul>
								</div>
							</div>
							<div className='list__item-link'>
								<a
									href='https://www.google.com/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<h6>View More</h6>
								</a>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Tutorial;
