import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import {
	DiNodejsSmall,
	DiReact,
	DiSass,
	DiCss3Full,
	DiGit,
	DiHeroku,
	DiHtml5,
	DiJavascript1,
	DiMongodb,
	DiMysql,
	DiPostgresql,
	DiStylus,
} from 'react-icons/di';

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
					<div className='icon'>
						<CircularProgressbarWithChildren
							value={50}
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
							<DiReact size='25' />
							<span style={{ fontSize: 10 }}>React</span>
						</CircularProgressbarWithChildren>
					</div>
					<div className='icon'>
						<CircularProgressbarWithChildren
							value={80}
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
							<DiSass size='25' />
							<span style={{ fontSize: 10 }}>Sass</span>
						</CircularProgressbarWithChildren>
					</div>
					<div className='icon'>
						<CircularProgressbarWithChildren
							value={95}
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
							<DiNodejsSmall size='25' />
							<span style={{ fontSize: 10 }}>Node</span>
						</CircularProgressbarWithChildren>
					</div>
					<div className='icon'>
						<CircularProgressbarWithChildren
							value={40}
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
							<DiCss3Full size='25' />
							<span style={{ fontSize: 10 }}>CSS</span>
						</CircularProgressbarWithChildren>
					</div>
					<div className='icon'>
						<CircularProgressbarWithChildren
							value={25}
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
							<DiGit size='25' />
							<span style={{ fontSize: 10 }}>Git</span>
						</CircularProgressbarWithChildren>
					</div>
					<div className='icon'>
						<CircularProgressbarWithChildren
							value={25}
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
							<DiHeroku size='25' />
							<span style={{ fontSize: 10 }}>Heroku</span>
						</CircularProgressbarWithChildren>
					</div>
					<div className='icon'>
						<CircularProgressbarWithChildren
							value={25}
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
							<DiHtml5 size='25' />
							<span style={{ fontSize: 10 }}>HTML5</span>
						</CircularProgressbarWithChildren>
					</div>
					<div className='icon'>
						<CircularProgressbarWithChildren
							value={25}
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
							<DiJavascript1 size='25' />
							<span style={{ fontSize: 10 }}>JS</span>
						</CircularProgressbarWithChildren>
					</div>
					<div className='icon'>
						<CircularProgressbarWithChildren
							value={25}
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
							<DiMongodb size='25' />
							<span style={{ fontSize: 10 }}>Mongo</span>
						</CircularProgressbarWithChildren>
					</div>
					<div className='icon'>
						<CircularProgressbarWithChildren
							value={25}
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
							<DiMysql size='25' />
							<span style={{ fontSize: 10 }}>MySQL</span>
						</CircularProgressbarWithChildren>
					</div>
					<div className='icon'>
						<CircularProgressbarWithChildren
							value={25}
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
							<DiPostgresql size='25' />
							<span style={{ fontSize: 10 }}>PostgSQL</span>
						</CircularProgressbarWithChildren>
					</div>
					<div className='icon'>
						<CircularProgressbarWithChildren
							value={25}
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
							<DiStylus size='25' />
							<span style={{ fontSize: 10 }}>Stylus</span>
						</CircularProgressbarWithChildren>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tools;
