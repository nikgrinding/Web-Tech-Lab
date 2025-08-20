import { useState } from "react";
import TemperatureControls from "./components/TemperatureControls";
import TemperatureDisplay from "./components/TemperatureDisplay";
import "./App.css"

export default function App() {
    const [celcius, setCelcius] = useState(25);
    const [scale, setScale] = useState(0);
    function onIncrease() {
        if (!scale) setCelcius(celcius+1);
        else setCelcius((fahrenheit+1-32)*5/9);
    }
    function onDecrease() {
        if (!scale) setCelcius(celcius-1);
        else setCelcius((fahrenheit-1-32)*5/9);
    }
    function onToggle() {
        setScale(1-scale);
    }
    const fahrenheit = celcius*9/5 + 32;
    return (
        <div className="container">
            <div className="app">
                <h2>Temperature</h2>
                <TemperatureDisplay celsius={celcius} fahreheit={fahrenheit} scale={scale}/>
                <TemperatureControls onIncrease={onIncrease} onToggle={onToggle} onDecrease={onDecrease} scale={scale}/>
            </div>
        </div>
    );
}