import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const ModalWork = (props) => {
	if (!props.isOpen) {
		return null;
	}

	return ReactDOM.createPortal(
		<div className='modal-blog'>
			<div className='modal-blog__container'>
				<h2 className='modal-blog__container-title'>
					{!props.language ? 'Blog' : 'Blog'}
				</h2>
				{props.children}
			</div>
		</div>,
		document.getElementById('modal')
	);
};

export default ModalWork;
