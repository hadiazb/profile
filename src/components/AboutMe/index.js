import React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import Skills from '../Skills/index';
import ListServices from '../ListServices';
import Bullets from '../Bullets/index';
import Tools from '../Tools/index';
import Education from '../Education';
import * as mainsActions from '../../actions/mainsActions';
import * as languageActions from '../../actions/languageActions';

const AboutMe = (props) => {
	const {
		languageReducer: { language },
	} = props;

	return (
		<div className='about'>
			<h3>{!language ? 'About Me' : 'Sobre mi'}</h3>
			<div className='about__content'>
				<p>
					{!language
						? `Engineer Mechanic from National University of Colombia.
					Specialized in technologies web, Frontend developer in
					React and MERN Stack. I think a autodidact person with
					great passion for the world of technology.`
						: `
					Ingeniero Mecánico de la Universidad Nacional de Colombia.
					Especializado en tecnologías web, desarrollador frontend en
					React y MERN Stack. Soy un desarrollador autodidacta con
					gran pasión por el mundo de la tecnología.`}
				</p>

				<Bullets language={!language} />
				<ListServices language={!language} />
				<Skills language={!language} />
				<Tools language={!language} />
				<Education language={!language} />
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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AboutMe);
