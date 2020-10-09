import React from 'react';
import ReactDOM from 'react-dom';
import ContactInformation from '../ContactInformation/index';

const Modal = (props) => {
	if (!props.isOpen) {
		return null;
	}

	return ReactDOM.createPortal(
		<ContactInformation />,
		document.getElementById('modal')
	);
};

export default Modal;
