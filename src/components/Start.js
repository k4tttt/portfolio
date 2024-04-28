import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Start = () => {
    const [hovered, setHovered] = useState(false);
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
                <h1 className={`BLACKOUT ${hovered ? 'swag active' : ''}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>tyra woden</h1>
                <p>I have a passion for creating <span className={color}>{text}</span> digital experiences.</p>
            </div>
            <div className='btnCircle' onClick={handleButtonClick}>
                <FontAwesomeIcon icon={faAngleDown} />
            </div>
        </div>
    );
}

export default Start;