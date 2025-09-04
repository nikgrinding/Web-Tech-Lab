import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import Thermostat from './pages/Thermostat';
import Timer from './pages/Timer';

export default function App() {
  return (
    <div className = "app">
      <Navbar />
      <Routes>
          <Route path="/" Component={Home} />
          <Route path="/education" Component={Education} />
          <Route path="/skills" Component={Skills} />
          <Route path="/projects" Component={Projects} />
          <Route path="/experience" Component={Experience} />
          <Route path="/achievements" Component={Achievements} />
          <Route path="/Thermostat" Component={Thermostat} />
          <Route path="/Timer" Component={Timer} />
      </Routes>
    </div>
  );
}