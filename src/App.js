import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import HeaderTop from './components/HeaderTop';
import FooterBottom from './components/FooterBottom';
import Home from './pages/Home';
import Blocks from './pages/Blocks';
function App() {
	return (
		<Fragment>
			<div className="container">
				<Router>
					<HeaderTop />
					<Link to="/">Home</Link>
					<Link to="/blocks">Blocks</Link>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/blocks" element={<Blocks />} />
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
					<FooterBottom />
				</Router>
			</div>
		</Fragment>
	);
}
export default App;
