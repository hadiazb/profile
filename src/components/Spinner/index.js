import React from 'react';
import './style.scss';
import { WindMillLoading } from 'react-loadingg';

const Spinner = () => {
	return (
		<div className='spinner'>
			<WindMillLoading
				size='large'
				color='#FFFFFF'
				speed={2}
			/>
		</div>
	);
};

export default Spinner;
