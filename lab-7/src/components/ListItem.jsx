export default function ListItem({ title, description }) {
	return (
		<div className="list-item">
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
}
