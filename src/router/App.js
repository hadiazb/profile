import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import './style.scss';
import Main from '../components/Main/index';
import Profile from '../components/Profile/index';
import Info from '../components/Info/index';
import Spinner from '../components/Spinner/index';

import * as mainsActions from '../actions/mainsActions';

const App = (props) => {
	const [time, setTime] = useState(false);
	const loading = () => {
		setTimeout(() => {
			setTime(true);
		}, 6000);
		if (time) {
			return (
				<Fragment>
					<Main />
					<div className='bullet'>
						<Profile />
						<Info keys={props.mains} />
					</div>
				</Fragment>
			);
		}

		return <Spinner />;
	};
	return <div className='container margin'>{loading()}</div>;
};

const mapStateToProps = (reducers) => {
	const { mainsReducer } = reducers;
	return mainsReducer;
};

export default connect(mapStateToProps, mainsActions)(App);
