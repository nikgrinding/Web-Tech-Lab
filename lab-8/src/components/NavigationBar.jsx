import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
	return (
		<Navbar bg="dark" variant="dark" sticky="top">
			<Container>
				<Navbar.Brand as={Link} to="/">
					Blog Dashboard
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link as={Link} to="/">
						Home
					</Nav.Link>
					<Nav.Link as={Link} to="/posts">
						Posts
					</Nav.Link>
				</Nav>
				<Nav>
					<Button variant="outline-light" className="me-2">
						Sign In
					</Button>
					<Button variant="primary">Register</Button>
				</Nav>
			</Container>
		</Navbar>
	);
}
