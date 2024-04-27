import React, { useState, useEffect } from 'react';

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
    }, []);

    const generateNewTextAndColor = () => {
        i = (i + 1) % adjectives.length;
        j = (j + 1) % colors.length;
        const newText = adjectives[i];
        const newColor = colors[j];
        return { newText, newColor };
    };

    return (
        <div id='titleScreen'>
            <p>Hello, I am</p>
            <h1 className='BLACKOUT'>tyra woden</h1>
            <p>I have a passion for creating <span className={color}>{text}</span> digital experiences.</p>
        </div>
    );
}

export default Start;