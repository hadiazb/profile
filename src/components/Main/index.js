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
import * as languageActions from '../../actions/languageActions';

const Main = (props) => {
	const [count, setCount] = useState(0);
	const {
		languageReducer: { language },
	} = props;
	const selectOption = async (value) => {
		await props.getOption(value);
	};

	useEffect(() => {
		selectOption(count);
	}, [count]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className='main'>
			<div className='main__item' onClick={() => setCount(1)}>
				<AiOutlineProfile size='30' />
				<h6>{!language ? 'ABOUT ME' : 'SOBRE MI'}</h6>
			</div>
			<div className='main__item' onClick={() => setCount(2)}>
				<AiFillMessage size='30' />
				<h6>{!language ? 'WORK' : 'PROYECTOS'}</h6>
			</div>
			<div className='main__item' onClick={() => setCount(3)}>
				<AiFillBell size='30' />
				<h6>{!language ? 'BLOG' : 'BLOG'}</h6>
			</div>
			<div className='main__item' onClick={() => setCount(4)}>
				<AiFillBulb size='30' />
				<h6>{!language ? 'TUTORIALS' : 'TUTORIALES'}</h6>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
