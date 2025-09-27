import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PostCard from '../components/PostCard';

export default function PostsPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await res.json();
                setPosts(data.slice(0, 12).map(post => ({id: post.id, title: post.title, description: post.body})));
            } catch (err) {
                console.error('Error fetching posts:', err);
            }
        };
        fetchPosts();
    }, []);
    
    return (
        <Container>
            <h1 className="mb-4">Latest Posts</h1>
            <Row>
                {posts.map(post => (
                    <Col key={post.id} lg={4} md={6} sm={12} className="mb-4">
                        <PostCard post={post} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}