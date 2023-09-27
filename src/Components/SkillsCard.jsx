const SkillsCard = ({ title, description, icon }) => {
	return (
		<article className='hover:animate-[wiggle_1s_ease-in-out_infinite]'>
			<span className='hover:animate-spin'>{icon}</span>
			<h4 className='mt-6 font-bold'>{title}</h4>
			<p className='mt-2 font-extralight'>{description}</p>
		</article>
	);
};

export default SkillsCard;
