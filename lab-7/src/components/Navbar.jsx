import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/education">Education</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/achievements">Achievements</Link>
      <Link to="/Thermostat">Thermostat</Link>
      <Link to="/Timer">Timer</Link>
    </div>
  );
}