import React from 'react';
import './style.scss';
import {
	AiOutlineProfile,
	AiFillBulb,
	AiFillMessage,
	AiFillBell,
} from 'react-icons/ai';

const Main = () => {
	return (
		<div className='main'>
			<div className='main__item'>
				<AiOutlineProfile size='30' />
				<h6>ABOUT ME</h6>
			</div>
			<div className='main__item'>
				<AiFillMessage size='30' />
				<h6>WORK</h6>
			</div>
			<div className='main__item'>
				<AiFillBell size='30' />
				<h6>BLOG</h6>
			</div>
			<div className='main__item'>
				<AiFillBulb size='30' />
				<h6>TUTORIALS</h6>
			</div>
		</div>
	);
};

export default Main;
