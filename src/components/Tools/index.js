import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import DataTools from '../../data/Tools/index';

const Tools = () => {
	return (
		<div className='about__content-tools'>
			<h4>Tools more used</h4>
			<p>
				From my experience as a developer I can say that the
				technologies that I have used the most in both frontend
				and backend projects are varied, here you can see the
				level of expertise I have in some of these.
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
