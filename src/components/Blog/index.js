import React, { useState } from 'react';
import './style.scss';
import Data from '../../data/Blogs/index';
import { format } from 'date-fns';
import ModalBlog from '../ModalBlog/index';
import { AiOutlineClose } from 'react-icons/ai';

const Blog = () => {
	const [modal, setModal] = useState(false);
	const [info, setInfo] = useState({});

	const handleClick = () => {
		setModal(!modal);
	};

	const splitText = (chain, separator) => {
		const arrayChain = chain.split(separator);
		return arrayChain.map((p, index) => (
			<span key={index}>
				{' '}
				<p>{p}</p>
				<br />
			</span>
		));
	};

	return (
		<div className='blog'>
			<h3>Blog</h3>
			<div className='blog__header'>
				<ul className='blog__header-items'>
					{Data.map((item) => (
						<li key={item.id} onClick={() => setInfo(item)}>
							<div className='box-left' onClick={handleClick}>
								{item.eyeIcon}
							</div>
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
								<p>{item.intro}</p>
							</div>
						</li>
					))}
					<ModalBlog isOpen={modal}>
						<div>
							<button
								className='modal-blog__container-outside'
								onClick={handleClick}
							>
								<AiOutlineClose size='20' />
							</button>
							<div className='modal-blog__container-content'>
								<h5 className='title'>{info.title}</h5>
								<div className='intro'>
									{splitText(info.text ? info.text : 'mama', '\n')}
								</div>
								<p className='time'>
									Publicado:
									<span className='time__time'>
										{format(
											info.date ? info.date : new Date(2016, 0, 1),
											'PPP'
										)}
									</span>
								</p>
								<p className='class-label'>
									Tipo:{' '}
									<span className='time__time'> {info.topic}</span>
								</p>
							</div>
						</div>
					</ModalBlog>
				</ul>
			</div>
		</div>
	);
};

export default Blog;
