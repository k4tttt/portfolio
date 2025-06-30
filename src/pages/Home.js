import React, { useEffect, useState } from 'react';
import Start from '../components/Start';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Navigation from '../components/Navigation/Navigation';

const Home = () => {
	const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('#titleScreen, #projects, #education, #work-experience');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.7  // Adjust: 0.5 means 50% of the section must be visible
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

	return (
		<main>
			<Navigation activeSection={activeSection} />
			<Start />
			<Projects />
			<Education />
		</main>
	);
}

export default Home;