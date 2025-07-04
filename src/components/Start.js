import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Start = () => {
  const [text, setText] = useState('awesome');
  const [color, setColor] = useState('blue');
  const adjectives = ["awesome", "user-friendly", "interactive", "fun", "intuitive"];
  const colors = ["green", "pink", "blue"];
  let i = 0;
  let j = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      const { newText, newColor } = generateNewTextAndColor();
      setText(newText);
      setColor(newColor);
    }, 1500);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, []);

  const generateNewTextAndColor = () => {
    i = (i + 1) % adjectives.length;
    j = (j + 1) % colors.length;
    const newText = adjectives[i];
    const newColor = colors[j];
    return { newText, newColor };
  };

  const handleButtonClick = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id='titleScreen'>
      <div className="content">
        <p>Hello, I am</p>
        <h1 className={`BLACKOUT`}>tyra woden</h1>
        <p>I love creating <span className={color}>{text}</span> digital experiences.</p>
      </div>
      <button className='btnCircle' onClick={handleButtonClick}>
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
    </div>
  );
}

export default Start;