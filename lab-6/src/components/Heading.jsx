// This component renders a heading element (h1, h2, etc.).
export default function Heading({ level = 1, children }) {
	const Tag = `h${level}`; // Dynamically create the tag type
	return <Tag>{children}</Tag>;
}
