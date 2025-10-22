// This component displays the formatted time left.
import Heading from './Heading.jsx';

export default function TimerDisplay({ timeLeft }) {
	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;
	const formattedMinutes = String(minutes).padStart(2, '0');
	const formattedSeconds = String(seconds).padStart(2, '0');
	return (
		<div className="TimerDisplay">
			<Heading level={1}>
				{`${formattedMinutes}:${formattedSeconds}`}
			</Heading>
		</div>
	);
}
