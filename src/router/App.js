import React, { useState } from 'react';
import './style.scss';
import Main from '../components/Main/index';
import Profile from '../components/Profile/index';
import Info from '../components/Info/index';

const App = () => {
	const [key, setKey] = useState(1);

	return (
		<div className='container margin'>
			<Main />
			<div className='bullet'>
				<Profile />
				<Info keys={key} />
			</div>
		</div>
	);
};

export default App;
