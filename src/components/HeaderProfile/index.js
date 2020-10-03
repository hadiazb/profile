import React from 'react';
import './style.scss';
import {
	AiFillGithub,
	AiFillPhone,
	AiFillMail,
	AiFillLinkedin,
	AiFillTwitterCircle,
} from 'react-icons/ai';

const HeaderProfile = () => {
	return (
		<div className='box'>
			<div className='box__header'></div>
			<div className='box__photo'></div>
			<div className='box__info'>
				<h2>Hugo A Díaz B</h2>
				<h4>React Developer</h4>
				<div className='icon'>
					<div className='icon__git'>
						<AiFillGithub size='25' />
					</div>
					<div className='icon__git'>
						<AiFillPhone size='25' />
					</div>
					<div className='icon__git'>
						<AiFillMail size='25' />
					</div>
					<div className='icon__git'>
						<AiFillLinkedin size='25' />
					</div>
					<div className='icon__git'>
						<AiFillTwitterCircle size='25' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderProfile;
