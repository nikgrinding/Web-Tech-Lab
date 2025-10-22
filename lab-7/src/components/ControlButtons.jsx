// This component renders the control buttons for the timer.
import Button from './Button.jsx';

export default function ControlButtons({
	isRunning,
	handleStart,
	handleStop,
	handleReset,
}) {
	return (
		<div className="ControlButtons">
			{!isRunning ? (
				<Button onClick={handleStart} className="start">
					Start
				</Button>
			) : (
				<Button onClick={handleStop} className="stop">
					Stop
				</Button>
			)}
			<Button onClick={handleReset} className="reset">
				Reset
			</Button>
		</div>
	);
}
