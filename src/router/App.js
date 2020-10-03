import React from 'react';
import './style.scss';
import Main from '../components/Main/index';
import Profile from '../components/Profile/index';
import Info from '../components/Info/index';

const App = () => {
	return (
		<div className='container margin'>
			<Main />
			<div className='bullet'>
				<Profile />
				<Info />
			</div>
		</div>
	);
};

export default App;
