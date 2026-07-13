import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Education from './pages/Education.js';
import Experience from './pages/Experience.js';
import Projects from './pages/Projects.js';
import Linux from './pages/Linux.js';
import Skills from './pages/Skills.js';
import Contact from './pages/Contact.js';
import './styles/App.css';

function App () {
    return (
        <>
        <Navbar />
        <div className = "app">
            <div id="home"><Home /></div>
            <div id="about"><About /></div>
            <div id="education"><Education /></div>
            <div id="experience"><Experience /></div>
            <div id="projects"><Projects /></div>
            <div id="linux"><Linux /></div>
            <div id="skills"><Skills /></div>
            <div id="contact"><Contact /></div>
        </div>
        </>
    );
}

export default App;