import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const ModalBlog = (props) => {
	if (!props.isOpen) {
		return null;
	}

	return ReactDOM.createPortal(
		<div className='modal-blog'>
			<div className='modal-blog__container'>
				{props.children}
			</div>
		</div>,
		document.getElementById('modal')
	);
};

export default ModalBlog;
