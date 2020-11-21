import React, { useState } from 'react';
import './style.scss';
import DataWorks from '../../data/Works/index';

const Work = () => {
	const [select, setSelect] = useState(0);
	const newData = [];

	const selectContent = (newData) => {
		switch (select) {
			case 1:
				newData = DataWorks.filter(
					(item) => item.specialty === 'Frontend'
				);
				return newData;

			case 2:
				newData = DataWorks.filter(
					(item) => item.specialty === 'Backend'
				);
				return newData;

			case 3:
				newData = DataWorks.filter(
					(item) => item.specialty === 'UI'
				);
				return newData;
			case 4:
				return DataWorks;

			default:
				return DataWorks;
		}
	};

	const Form = () => (
		<form className='work__content-input'>
			<div onClick={() => setSelect(1)}>
				<input
					type='radio'
					name='type'
					id='front'
					value='front'
				/>
				<label htmlFor='front'>Front</label>
			</div>
			<div onClick={() => setSelect(2)}>
				<input
					type='radio'
					name='type'
					id='back'
					value='back'
				/>
				<label htmlFor='back'>Back</label>
			</div>
			<div onClick={() => setSelect(3)}>
				<input type='radio' name='type' id='ui' value='ui' />
				<label htmlFor='ui'>UI</label>
			</div>
			<div onClick={() => setSelect(4)}>
				<input type='radio' name='type' id='all' value='all' />
				<label htmlFor='all'>All</label>
			</div>
		</form>
	);

	return (
		<div className='work'>
			<h3>Work</h3>
			<div className='work__content'>
				{Form()}
				<div className='work__content-item'>
					{selectContent(newData).map((item) => (
						<div className='item' key={item.id}>
							<div
								className='item__header'
								style={{
									backgroundImage: `url(${item.image})`,
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									opacity: 0.8,
								}}
							></div>
							<div className='item__footer'>
								<h5>{item.title}</h5>
								<p>{item.text}</p>
								<div className='item__footer-class'>
									<h6>{item.specialty}</h6>
									<span>{item.icon}</span>
								</div>
							</div>
							<div className='item__modal'></div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Work;
