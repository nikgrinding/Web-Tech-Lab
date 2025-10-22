// This is the main application component that holds the state and logic.
import { useState, useEffect } from 'react';
import './App.css';
import Heading from './components/Heading.jsx';
import TimeSetter from './components/TimeSetter.jsx';
import TimerDisplay from './components/TimerDisplay.jsx';
import ControlButtons from './components/ControlButtons.jsx';

export default function App() {
	const [initialTime, setInitialTime] = useState(30);
	const [timeLeft, setTimeLeft] = useState(initialTime);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		let interval = null;
		if (isRunning && timeLeft > 0) {
			interval = setInterval(() => {
				setTimeLeft((prevTime) => prevTime - 1);
			}, 1000);
		} else if (timeLeft === 0) {
			setIsRunning(false);
		}
		return () => clearInterval(interval);
	}, [isRunning, timeLeft]);

	function handleStart() {
		if (timeLeft > 0) {
			setIsRunning(true);
		}
	}

	function handleStop() {
		setIsRunning(false);
	}

	function handleReset() {
		setIsRunning(false);
		setTimeLeft(initialTime);
	}

	return (
		<div className="App">
			<Heading level={1}>Timer</Heading>
			<TimeSetter
				setTimeLeft={setTimeLeft}
				isRunning={isRunning}
				setInitialTime={setInitialTime}
			/>
			<TimerDisplay timeLeft={timeLeft} />
			<ControlButtons
				isRunning={isRunning}
				handleStart={handleStart}
				handleStop={handleStop}
				handleReset={handleReset}
			/>
		</div>
	);
}
