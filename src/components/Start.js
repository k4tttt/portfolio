import React, { useState, useEffect } from 'react';

export default function Start() {
    const [text, setText] = useState('awesome');
    const adjectives = ["awesome", "user-friendly", "interactive", "fun", "intuitive"];
    let i = 0;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setText(generateNewText());
        }, 1500);

        return () => clearInterval(intervalId);
    }, []);

    const generateNewText = () => {
        if (i < adjectives.length - 1) {
            i++;
        } else {
            i = 0;
        }
        return adjectives[i];
    };

    return (
        <div id='titleScreen'>
            <p>Hello, I am</p>
            <h1 className='BLACKOUT'>tyra woden</h1>
            <p>I have a passion for creating <span className='blue'>{text}</span> digital experiences.</p>
        </div>
    );
}