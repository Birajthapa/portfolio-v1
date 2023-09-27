import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

const ProjectCard = ({ image, url, github, title, text }) => {
	return (
		<article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
			<img
				src={image}
				className='w-full object-cover rounded-t-lg h-64 '
			/>
			<div className='capitalize p-8'>
				<h3 className='text-xl tracking-wide font-medium'>{title}</h3>
				<p className='mt-4 leading-loose'>{text}</p>
				<div className='mt-4 flex gap-x-4'>
					<a
						href={url}
						target='__blank'>
						<FaLink className='w-8 h-8 hover:text-primary duration-300' />
					</a>
					<a
						href={github}
						target='__blank'>
						<FaGithub className='w-8 h-8 hover:text-primary duration-300' />
					</a>
				</div>
			</div>
		</article>
	);
};

export default ProjectCard;
