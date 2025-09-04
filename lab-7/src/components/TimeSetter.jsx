// This component allows the user to set the timer's minutes and seconds.
import { useState } from 'react';
import Heading from './Heading.jsx';
import Label from './Label.jsx';
import Input from './Input.jsx';

export default function TimeSetter({ setTimeLeft, isRunning, setInitialTime }) {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(30);

    function handleChange(e) {
        const { name, value } = e.target;
        const numericValue = parseInt(value) || 0;
        let currentMinutes = minutes;
        let currentSeconds = seconds;
        if (name === 'minutes') {
            currentMinutes = numericValue;
            setMinutes(numericValue);
        } else {
            currentSeconds = numericValue;
            setSeconds(numericValue);
        }
        const newTotalSeconds = currentMinutes * 60 + currentSeconds;
        setTimeLeft(newTotalSeconds);
        setInitialTime(newTotalSeconds);
    }

    return (
        <div className="TimeSetter">
            <Heading level={2}>Set Timer</Heading>
            <div className="TimeSetter-controls">
                <Label className="TimeSetter-label">
                    <Heading level={3}>Minutes: </Heading>
                    <Input
                        name="minutes"
                        value={minutes}
                        onChange={handleChange}
                        disabled={isRunning}
                        min="0"
                    />
                </Label>
                <Label className="TimeSetter-label">
                    <Heading level={3}>Seconds: </Heading>
                    <Input
                        name="seconds"
                        value={seconds}
                        onChange={handleChange}
                        disabled={isRunning}
                        min="0"
                        max="59"
                    />
                </Label>
            </div>
        </div>
    );
}