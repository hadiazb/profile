import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import DataTools from '../../data/Tools/index';

const Tools = (props) => {
	return (
		<div className='about__content-tools'>
			<h4>
				{props.language
					? 'Tools more used'
					: 'Herramientas usadas'}
			</h4>
			<p>
				{props.language
					? `From my experience as a developer I can say that the
				technologies that I have used the most in both frontend
				and backend projects are varied, here you can see the
				level of expertise I have in some of these.`
					: `
				Desde mi experiencia como desarrollador puedo decir que el
				tecnologías que más he usado tanto en frontend
				y los proyectos de backend son variados, aquí puedes ver los
				nivel de experiencia que tengo en algunos de estos.`}
			</p>
			<div className='tools'>
				<div className='tools__list'>
					{DataTools.map((item) => (
						<div className='icon' key={item.id}>
							<CircularProgressbarWithChildren
								value={item.value}
								styles={{
									root: {
										width: '70px',
									},
									path: {
										stroke: `rgba(16, 139, 12, 0.2)`,
									},
									text: {
										fill: `rgba(16, 139, 12, 0.5)`,
									},
								}}
							>
								{item.icon}
								<span style={{ fontSize: 10 }}>{item.title}</span>
							</CircularProgressbarWithChildren>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Tools;
