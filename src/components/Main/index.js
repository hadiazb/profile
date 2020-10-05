import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './style.scss';
import {
	AiOutlineProfile,
	AiFillBulb,
	AiFillMessage,
	AiFillBell,
} from 'react-icons/ai';
import * as mainsActions from '../../actions/mainsActions';

const Main = (props) => {
	const [count, setCount] = useState(0);
	const selectOption = async (value) => {
		await props.getOption(value);
	};

	useEffect(() => {
		selectOption(count);
	}); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className='main'>
			<div className='main__item' onClick={() => setCount(1)}>
				<AiOutlineProfile size='30' />
				<h6>ABOUT ME</h6>
			</div>
			<div className='main__item' onClick={() => setCount(2)}>
				<AiFillMessage size='30' />
				<h6>WORK</h6>
			</div>
			<div className='main__item' onClick={() => setCount(3)}>
				<AiFillBell size='30' />
				<h6>BLOG</h6>
			</div>
			<div className='main__item' onClick={() => setCount(4)}>
				<AiFillBulb size='30' />
				<h6>TUTORIALS</h6>
			</div>
		</div>
	);
};

const mapStateToProps = (reducers) => {
	const { mainsReducer } = reducers;
	return mainsReducer;
};

export default connect(mapStateToProps, mainsActions)(Main);
