import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = (props) => {
	return (
		<div className='about__content-skills'>
			<h4>
				{props.language ? 'Specialties' : 'Especialidades'}
			</h4>
			<p>
				{props.language
					? `In the world of web development there are many
				specialties such as Front, Back, Cloud and UI designer.
				I am a FullStack developer focused on the Frontend with
				React, but I also have knowledge of Back and UI design.`
					: `
				En el mundo del desarrollo web hay muchas
				especialidades como Front, Back, Cloud y UI Designer.
				Soy un desarrollador FullStack enfocado en el Frontend con
				Reaccionar, pero también tengo conocimientos de diseño de
				interfaz de usuario y espalda.`}
			</p>
			<div className='skill'>
				<div className='skill__specialty'>
					<CircularProgressbar
						value={75}
						minValue={0}
						maxValue={100}
						circleRatio={1}
						strokeWidth={8}
						text={`
          ${0.75 * 100}% `}
						counterClockwise={false}
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
					/>
					<h5>Frontend</h5>
				</div>
				<div className='skill__specialty'>
					<CircularProgressbar
						value={50}
						minValue={0}
						maxValue={100}
						circleRatio={1}
						strokeWidth={8}
						text={`${0.5 * 100}% `}
						counterClockwise={false}
						styles={{
							root: {
								width: '70px',
							},
							path: {
								stroke: `rgba(16, 139, 12, 0.2)`,
								transition: 'stroke-dashoffset 0.5s ease 0s',
							},
							text: {
								fill: `rgba(16, 139, 12, 0.5)`,
							},
						}}
					/>
					<h5>Backend</h5>
				</div>
				<div className='skill__specialty'>
					<CircularProgressbar
						value={60}
						minValue={0}
						maxValue={100}
						circleRatio={1}
						strokeWidth={8}
						text={`${0.6 * 100}% `}
						counterClockwise={false}
						styles={{
							root: {
								width: '70px',
							},
							path: {
								stroke: `rgba(16, 139, 12, 0.2)`,
								transition: 'stroke-dashoffset 0.5s ease 0s',
							},
							text: {
								fill: `rgba(16, 139, 12, 0.5)`,
							},
						}}
					/>
					<h5>UI Designer</h5>
				</div>
			</div>
		</div>
	);
};

export default Skills;
