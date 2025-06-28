import React from 'react';
import Start from '../components/Start';
import Education from '../components/Education';
import Projects from '../components/Projects';

const Home = () => {
    return (
        <main>
            <Start />
            <Projects />
            <Education />
        </main>
    );
}

export default Home;