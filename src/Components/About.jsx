import React from 'react';
import SectionTitle from './SectionTitle';
import biraj from '../assets/biraj.jpeg';
const About = () => {
	return (
		<section
			className='py-20 align-element bg-primary text-neutral'
			id='about'>
			<div className='align-element grid md:grid-cols-2 items-center gap-16'>
				<img
					src={biraj}
					className='w-full h-81 	filter: sepia(0)'
					alt='Picture of birajThapa'
				/>
				<article>
					<SectionTitle text='about me' />
					<p className='leading-loose mt-8'>
						Learning programming is a challenging yet rewarding endeavor, akin
						to mastering a new language of logic and commands. As a web
						developer, my craft is the digital landscapes of the internet,
						translating ideas into interactive web experiences. Traveling offers
						a portal to diverse cultures and personal growth, with each journey
						leaving indelible memories. Problem-solving is a universal skill
						that empowers me to navigate life's complexities. Life itself, a
						journey of self-discovery and connection, I encourage the pursuit of
						purpose and the embrace of both its uncertainties and joys.
						Together, these elements compose a rich and dynamic tapestry of the
						human experience, inviting continual learning, exploration, and
						growth.
					</p>
				</article>
			</div>
		</section>
	);
};

export default About;
