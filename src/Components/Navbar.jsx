import { useEffect, useState } from 'react';
import { links } from '../data';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const themes = {
	winter: 'winter',
	dracula: 'dracula',
};
const getThemesFromLocalStorage = () => {
	return localStorage.getItem('theme' || themes.winter);
};
const Navbar = () => {
	const [theme, setTheme] = useState(getThemesFromLocalStorage());

	const handleTheme = () => {
		const { dracula, winter } = themes;
		const newTheme = theme === winter ? dracula : winter;
		setTheme(newTheme);
	};
	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);
	return (
		<nav className='bg-base-300'>
			<div className='navbar align-centers'>
				<div className='navbar-start'>
					<h2 className='text-3xl mx-2 hover:scale-125 duration-200'>
						Biraj <span className='text-primary'>Thapa</span>
					</h2>
				</div>
				<div className='navbar-center gap-x-3'>
					{links.map((link) => {
						const { id, href, text } = link;
						return (
							<a
								key={id}
								href={href}
								className='text-lg font-semibold capitalize tracking-wide hover:text-primary-focus duration-300'>
								{text}
							</a>
						);
					})}
				</div>
				<div className='navbar-end'>
					<label className='swap swap-rotate'>
						<input
							type='checkbox'
							onChange={handleTheme}
						/>
						<BsSunFill className='swap-on h-4 w-4' />
						<BsMoonFill className='swap-off h-4 w-4' />
					</label>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
