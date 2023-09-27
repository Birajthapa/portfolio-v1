import React from 'react';
import SectionTitle from './SectionTitle';
import { projects } from '../data';
import ProjectCard from './ProjectCard';

const Projects = () => {
	return (
		<div
			className='py-20 align-element text-neutral-focus shadow-lg'
			id='projects'>
			<SectionTitle text='some of my personal projects' />
			<div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
				{projects.map((project) => {
					return (
						<ProjectCard
							key={project.id}
							{...project}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
