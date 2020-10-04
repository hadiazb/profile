import React from 'react';
import './style.scss';
import AboutMe from '../AboutMe/index';
import Tutorial from '../Tutorial/index';
import Work from '../Work/index';
import Blog from '../Blog/index';

const Info = (props) => {
	const putContent = (id) => {
		switch (id) {
			case 1:
				return <AboutMe />;

			case 2:
				return <Tutorial />;

			case 3:
				return <Work />;

			case 4:
				return <Blog />;

			default:
				return <h2>Este es el Home de mi portafolio</h2>;
		}
	};

	return (
		<div className='info'>
			{putContent(props.keys)
				? putContent(props.keys)
				: putContent(5)}
		</div>
	);
};

export default Info;
