import React from 'react';
import { connect } from 'react-redux';
import './style.scss';
import Main from '../components/Main/index';
import Profile from '../components/Profile/index';
import Info from '../components/Info/index';

import * as mainsActions from '../actions/mainsActions';

const App = (props) => {
	return (
		<div className='container margin'>
			<Main />
			<div className='bullet'>
				<Profile />
				<Info keys={props.mains} />
			</div>
		</div>
	);
};

const mapStateToProps = (reducers) => {
	const { mainsReducer } = reducers;
	return mainsReducer;
};

export default connect(mapStateToProps, mainsActions)(App);
