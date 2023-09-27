import React from 'react';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import interfacePic from '../assets/interfacePic.webp';

const Main = () => {
	return (
		<main className='bg-primary py-24 font-mono'>
			<div className='align-element grid md:grid-cols-2 items-center gap-8'>
				<article>
					<h1 className='text-primary-content text-4xl tracking-wide font-bold '>
						Hello, I'm <br />
						Biraj Thapa.
					</h1>
					<p className='text-primary-content text-2xl mt-2 capitalize'>
						web developer here!!
					</p>
					<p className='capitalize mt-2 text-lg text-primary-content'>
						i love web coding!
					</p>
					<div className='flex gap-x-4 mt-4'>
						<a
							href='https://github.com/Birajthapa'
							target='__blank'>
							<FaGithubSquare className='h-8 w-8 text-neutral hover:text-primary-content duration-300' />
						</a>
						<a
							href='www.linkedin.com/in/biraj-thapa'
							target='__blank'>
							<FaLinkedin className='h-8 w-8 text-neutral hover:text-primary-content  duration-300' />
						</a>
						<a
							href='https://twitter.com/BT01000011'
							target='__blank'>
							<FaTwitterSquare className='h-8 w-8 text-neutral hover:text-primary-content  duration-300' />
						</a>
					</div>
				</article>
				<article className='hidden md:block'>
					<img
						src={interfacePic}
						alt='coding image'
						className='h-80 lg:h-96 rounded-md'
					/>
				</article>
			</div>
		</main>
	);
};

export default Main;
