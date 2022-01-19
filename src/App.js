/** @format */

import Home from './pages/Home';
import GithubProfile from './pages/GithubProfile';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path='/githubprofile' element={<GithubProfile />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
