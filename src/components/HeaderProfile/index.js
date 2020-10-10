import React, { useState } from 'react';
import './style.scss';
import {
	AiFillGithub,
	AiFillLinkedin,
	AiFillTwitterCircle,
	AiOutlineDownload,
	AiOutlineCaretDown,
} from 'react-icons/ai';
import Modal from '../Modal/index';
import {
	AiOutlineClose,
	AiFillPhone,
	AiOutlineMail,
	AiOutlineWhatsApp,
} from 'react-icons/ai';

const HeaderProfile = () => {
	const [modal, setModal] = useState(false);

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
					<a
						href='https://github.com/hadiazb'
						target='_blank'
						rel='noopener noreferrer'
					>
						<div className='icon__git'>
							<AiFillGithub size='25' />
						</div>
					</a>
					<a
						href='https://www.linkedin.com/in/hadiazb/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<div className='icon__git'>
							<AiFillLinkedin size='25' />
						</div>
					</a>
					<a
						href='https://twitter.com/hadiazb_ing'
						target='_blank'
						rel='noopener noreferrer'
					>
						<div className='icon__git'>
							<AiFillTwitterCircle size='25' />
						</div>
					</a>
				</div>
			</div>
			<div className='box__contact'>
				<a
					className='box__contact-item'
					target='_blank'
					rel='noopener noreferrer'
					href='https://firebasestorage.googleapis.com/v0/b/portafolio-a8d13.appspot.com/o/Potafolio%2FProfile%2FCV%2Fhadiazb.pdf?alt=media&token=c37a3234-7989-4e90-bd6e-c299ec88509e'
				>
					<h4>
						DOWNLOAD CV{' '}
						<span>
							<AiOutlineDownload />
						</span>
					</h4>
				</a>
				<button
					className='box__contact-item'
					onClick={() =>
						modal ? setModal(false) : setModal(true)
					}
				>
					<h4>
						CONTACT ME{'  '}
						<span>
							<AiOutlineCaretDown />
						</span>
					</h4>
				</button>
				<Modal isOpen={modal}>
					<button
						onClick={() =>
							!modal ? setModal(true) : setModal(false)
						}
						className='modal__container-button'
					>
						<AiOutlineClose size='20' />
					</button>
					<div className='modal__container-content'>
						<ul>
							<li>
								<div>
									<AiOutlineMail size='20' />
								</div>
								<p>hugoandresdiazbernal@gmail.com</p>
							</li>
							<li>
								<div>
									<AiFillPhone size='20' />
								</div>
								<p>(+57) 311-268-1981</p>
							</li>
							<li>
								<div>
									<AiOutlineWhatsApp size='20' />
								</div>
								<p>(+57) 311-268-1981</p>
							</li>
						</ul>
						<form className='form'>
							<input
								className='form__text'
								type='name'
								placeholder='Name...'
							/>
							<input
								className='form__text'
								type='email'
								placeholder='Email...'
							/>
							<input
								className='form__commentary'
								type='text'
								placeholder='Commentary...'
							/>
							<input
								className='form__submit'
								type='submit'
								value='Send'
							/>
						</form>
					</div>
				</Modal>
			</div>
		</div>
	);
};

export default HeaderProfile;
