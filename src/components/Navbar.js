import { useState, useEffect } from 'react';
import { useMemo } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const sections = useMemo(
    () => ['home', 'about', 'education', 'experience', 'projects', 'linux', 'skills', 'contact'],
    []
  );

  const sectionNames = {
    about: 'ABOUT ME'
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections, setActiveSection]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <nav className="navbar">
      <div className="nav-container">
        <span className="nav-logo" style={{ cursor: 'pointer' }} onClick={() => scrollTo('home')}> {sectionNames[activeSection] || activeSection.toUpperCase()} </span>
        <div className="nav-links">
          <button onClick={() => scrollTo('home')} className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} data-tooltip="Home">1</button>
          <button onClick={() => scrollTo('about')} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} data-tooltip="About">2</button>
          <button onClick={() => scrollTo('education')} className={`nav-link ${activeSection === 'education' ? 'active' : ''}`} data-tooltip="Education">3</button>
          <button onClick={() => scrollTo('experience')} className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} data-tooltip="Experience">4</button>
          <button onClick={() => scrollTo('projects')} className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} data-tooltip="Projects">5</button>
          <button onClick={() => scrollTo('linux')} className={`nav-link ${activeSection === 'linux' ? 'active' : ''}`} data-tooltip="Linux">6</button>
          <button onClick={() => scrollTo('skills')} className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} data-tooltip="Skills">7</button>
          <button onClick={() => scrollTo('contact')} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} data-tooltip="Contact">8</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;