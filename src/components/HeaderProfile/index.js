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
import Swal from 'sweetalert2';
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
	const [data, setData] = useState({
		name: '',
		email: '',
		commentary: '',
	});

	const handleClick = () => {
		setLanguage(!language);
		props.changeOption(language);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const url =
			'https://api-porfolio.herokuapp.com/api/users';

		fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => {
				res.json();
				if (res.status === 500) {
					Swal.fire({
						title: `<h6>There a error in the data</h6>`,
						background: 'rgba(255, 255, 255, 1)',
						timer: 3000,
						timerProgressBar: true,
						icon: 'error',
						showConfirmButton: false,
					});
				}

				if (res.status === 200) {
					Swal.fire({
						title: '<h6>Data Registered</h6>',
						background: 'rgba(255, 255, 255, 1)',
						timer: 3000,
						timerProgressBar: true,
						icon: 'success',
						showConfirmButton: false,
					});
				}
			})
			.catch((error) =>
				Swal.fire({
					title: `<h6>${error.message}</h6>`,
					background: 'rgba(255, 255, 255, 1)',
					timer: 3000,
					timerProgressBar: true,
					icon: 'error',
					showConfirmButton: false,
				})
			);
		setModal(!modal);
	};

	const handleInputChange = (event) => {
		setData({
			...data,
			[event.target.name]: event.target.value,
		});
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
					onClick={() => setModal(!modal)}
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
						onClick={() => setModal(!modal)}
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
						<form className='form' onSubmit={handleSubmit}>
							<label htmlFor='name'>
								<input
									className='form__text'
									type='name'
									name='name'
									placeholder='Name...'
									onChange={handleInputChange}
								/>
							</label>
							<label htmlFor='email'>
								<input
									className='form__text'
									type='email'
									name='email'
									placeholder='Email...'
									onChange={handleInputChange}
								/>
							</label>
							<label htmlFor='commentary'>
								<textarea
									className='form__commentary'
									type='commentary'
									name='commentary'
									placeholder='Commentary...'
									onChange={handleInputChange}
								></textarea>
							</label>
							<button className='form__submit' type='submit'>
								Send
							</button>
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
