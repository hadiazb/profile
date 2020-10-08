import React from 'react';
import './style.scss';
import DataWorks from '../../data/Works/index';

const Work = () => {
	return (
		<div className='work'>
			<h3>Work</h3>
			<div className='work__content'>
				<div className='work__content-item'>
					{DataWorks.map((item) => (
						<div className='item' key={item.id}>
							<div className='item__header'>
								<img src={item.image} alt={item.text_image} />
							</div>
							<div className='item__footer'>
								<h5>{item.title}</h5>
								<p>{item.text}</p>
								<div className='item__footer-class'>
									<h6>{item.specialty}</h6>
									<span>{item.icon}</span>
								</div>
							</div>
							<div className='item__modal'></div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Work;

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }
