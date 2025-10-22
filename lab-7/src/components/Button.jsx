// This is a simple, reusable button component.
export default function Button({
	onClick,
	children,
	disabled = false,
	className = '',
}) {
	return (
		<button onClick={onClick} disabled={disabled} className={className}>
			{children}
		</button>
	);
}
