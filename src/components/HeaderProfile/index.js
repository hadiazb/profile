import React from 'react';
import './style.scss';
import {
	AiFillGithub,
	AiFillPhone,
	AiFillMail,
	AiFillLinkedin,
	AiFillTwitterCircle,
	AiOutlineDownload,
	AiOutlineCaretDown,
} from 'react-icons/ai';

const HeaderProfile = () => {
	return (
		<div className='box'>
			<div className='box__header'></div>
			<div className='box__photo'></div>
			<div className='box__info'>
				<h2>Hugo A Díaz B</h2>
				<h4>Software Developer</h4>
				<h5>MERN Stack</h5>
				<h6>Bogota Colombia</h6>
				<div className='icon'>
					<div className='icon__git'>
						<AiFillPhone size='25' />
					</div>
					<div className='icon__git'>
						<AiFillMail size='25' />
					</div>
					<div className='icon__git'>
						<AiFillGithub size='25' />
					</div>
					<div className='icon__git'>
						<AiFillLinkedin size='25' />
					</div>
					<div className='icon__git'>
						<AiFillTwitterCircle size='25' />
					</div>
				</div>
			</div>
			<div className='box__contact'>
				<div className='box__contact-item'>
					<h4>
						DOWNLOAD CV{' '}
						<span>
							<AiOutlineDownload />
						</span>
					</h4>
				</div>
				<div className='box__contact-item'>
					<h4>
						CONTACT ME{'  '}
						<span>
							<AiOutlineCaretDown />
						</span>
					</h4>
				</div>
			</div>
		</div>
	);
};

export default HeaderProfile;
