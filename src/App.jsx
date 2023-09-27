import React from 'react';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Skills from './Components/Skills';
import About from './Components/About';
import Projects from './Components/Projects';

const App = () => {
	return (
		<div>
			<Navbar />
			<Main />
			<Skills />
			<About />
			<Projects />
		</div>
	);
};

export default App;
