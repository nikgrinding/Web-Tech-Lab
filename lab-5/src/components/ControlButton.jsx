export default function ControlButton({ label, handleChange }) {
    return <button onClick={handleChange}>{label}</button>;
}