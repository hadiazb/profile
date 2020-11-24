import React from 'react';
import './style.scss';
import Data from '../../data/Blogs/index';
import { format } from 'date-fns';

const Blog = () => {
	return (
		<div className='blog'>
			<h3>Blog</h3>
			<div className='blog__header'>
				<ul className='blog__header-items'>
					{Data.map((item) => (
						<li key={item.id}>
							<div className='box-left'>{item.eyeIcon}</div>
							<div className='box-center'>
								<div className='date'>
									{item.scheduleIcon}
									<p>{format(item.date, 'PPP')}</p>
								</div>
								<div className='type'>
									<h6>Topic</h6>
									<p>{item.topic}</p>
								</div>
							</div>
							<div className='box-right'>
								<h6>{item.title}</h6>
								<p>{item.text}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Blog;
