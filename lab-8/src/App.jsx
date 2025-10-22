import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';
import { Container } from 'react-bootstrap';

export default function App() {
	return (
		<BrowserRouter>
			<NavigationBar />
			<Container className="mt-4">
				<Routes>
					<Route path="/" Component={HomePage} />
					<Route path="/posts" Component={PostsPage} />
				</Routes>
			</Container>
		</BrowserRouter>
	);
}
