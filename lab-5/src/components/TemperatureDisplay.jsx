// TemperatureDisplay component - displays the temperature in appropriate scale

export default function TemperatureDisplay ({ celsius, fahreheit, scale }) {
    let display;
    if (scale === 0) {
        display = <h1>{celsius}&deg;C</h1>;
    } else {
        display = <h1>{fahreheit}&deg;F</h1>;
    }
    return display;
}