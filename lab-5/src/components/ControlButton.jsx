// ControlButton component - Get the label and change handling function of the button as props and returns the button element with that label which performs the function when it is clicked

export default function ControlButton({ label, handleChange }) {
	return <button onClick={handleChange}>{label}</button>;
}
