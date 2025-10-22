import { Card, Button } from 'react-bootstrap';

export default function PostCard({ post }) {
	const { title, description } = post;
	return (
		<Card className="h-100">
			<Card.Img
				variant="top"
				src={`https://picsum.photos/400/200?random=${post.id}`}
			/>
			<Card.Body className="d-flex flex-column">
				<Card.Title>{title}</Card.Title>
				<Card.Text className="flex-grow-1">{description}</Card.Text>
				<Button variant="primary">Read More</Button>
			</Card.Body>
		</Card>
	);
}
