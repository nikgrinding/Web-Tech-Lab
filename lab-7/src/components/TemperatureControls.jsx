// TemperatureControls component - displays the three ControlButton components

import ControlButton from './ControlButton.jsx';

export default function TemperatureControls({
	onIncrease,
	onDecrease,
	onToggle,
	scale,
}) {
	let scaleElement;
	if (!scale)
		scaleElement = (
			<ControlButton
				label={'Change Scale to Fahrenheit'}
				handleChange={onToggle}
			/>
		);
	else
		scaleElement = (
			<ControlButton
				label={'Change Scale to Celsius'}
				handleChange={onToggle}
			/>
		);
	return (
		<div>
			<ControlButton label={'- Decrease'} handleChange={onDecrease} />
			{scaleElement}
			<ControlButton label={'+ Increase'} handleChange={onIncrease} />
		</div>
	);
}
