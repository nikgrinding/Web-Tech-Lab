// TemperatureDisplay component - displays the temperature in appropriate scale

export default function TemperatureDisplay({ celsius, fahrenheit, scale }) {
	let display;
	if (scale === 0) {
		display = <h1>{celsius}&deg;C</h1>;
	} else {
		display = <h1>{fahrenheit}&deg;F</h1>;
	}
	return display;
}
