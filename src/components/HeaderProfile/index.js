import React, { useState } from 'react';
import './style.scss';
import {
	AiFillGithub,
	AiFillLinkedin,
	AiFillTwitterCircle,
	AiOutlineDownload,
	AiOutlineCaretDown,
} from 'react-icons/ai';
import Modal from '../ModalContact/index';
import {
	AiOutlineClose,
	AiFillPhone,
	AiOutlineMail,
	AiOutlineWhatsApp,
} from 'react-icons/ai';
import { connect } from 'react-redux';
import * as mainsActions from '../../actions/mainsActions';
import * as languageActions from '../../actions/languageActions';

const HeaderProfile = (props) => {
	const [modal, setModal] = useState(false);
	const [language, setLanguage] = useState(false);

	const handleClick = () => {
		setLanguage(!language);
		props.changeOption(language);
	};

	return (
		<div className='box'>
			<div className='box__language'>
				{language ? (
					<span
						style={{ color: 'rgba(16, 139, 12, 0.6)' }}
						onClick={handleClick}
					>
						ENG
					</span>
				) : (
					<span
						style={{ color: '#f4f4f4' }}
						onClick={handleClick}
					>
						ENG
					</span>
				)}
				<span>|</span>
				{language ? (
					<span
						style={{ color: '#f4f4f4' }}
						onClick={handleClick}
					>
						SPA
					</span>
				) : (
					<span
						style={{ color: 'rgba(16, 139, 12, 0.6)' }}
						onClick={handleClick}
					>
						SPA
					</span>
				)}
			</div>
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
						{!props.languageReducer.language
							? 'DOWNLOAD CV'
							: 'DESCARGAR CV'}
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
						{!props.languageReducer.language
							? 'CONTACT ME'
							: 'CONTACTAME'}
						<span>
							<AiOutlineCaretDown />
						</span>
					</h4>
				</button>
				<Modal
					isOpen={modal}
					language={props.languageReducer.language}
				>
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
							<textarea
								className='form__commentary'
								type='text'
								placeholder='Commentary...'
							></textarea>
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

const mapStateToProps = (reducers) => {
	const { mainsReducer, languageReducer } = reducers;
	return { mainsReducer, languageReducer };
};

const mapDispatchToProps = {
	...mainsActions,
	...languageActions,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderProfile);
