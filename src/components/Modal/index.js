import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const Modal = (props) => {
	if (!props.isOpen) {
		return null;
	}

	return ReactDOM.createPortal(
		<div className='modal'>
			<div className='modal__container'>
				<h2 className='modal__container-title'>Contact Me</h2>
				{props.children}
			</div>
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;
