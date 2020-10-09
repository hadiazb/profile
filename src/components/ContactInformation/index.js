import React, { useState } from 'react';
import './style.scss';

const ContactInformation = () => {
	const [open, setOpen] = useState(false);

	if (open) {
		return null;
	}
	console.log('modal interno', open);
	return (
		<div className='modal'>
			<div className='modal__container'>
				<h2>Contact Me</h2>

				<h5>Estamos trabajando en esto</h5>

				<input
					type='submit'
					value='Exit'
					onClick={() => setOpen(true)}
				/>
			</div>
		</div>
	);
};

export default ContactInformation;
