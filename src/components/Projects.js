import React from 'react';
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div id='projects'>
            <h2 className='BLACKOUT'>projects</h2>
            <p className='smallText'>Here are some projects that I have worked on.</p>
            <div id='projectContainer'>
                <div id='origo' className='projectItem overlay'>
                    <p className='bold projectTitle'><span className='smallText'>2023-</span><br/>Marketing at Kårhuset Origo</p>
                </div>
                <div id='idaginatt' className='projectItem overlay'>
                    <p className='bold projectTitle'><span className='smallText'>2022-2023</span><br/>IDag&Inatt</p>
                </div>
                <div id='discogs' className='projectItem overlay'>
                    <p className='bold projectTitle'><span className='smallText'>2023</span><br/>Redesigning Discogs</p>
                </div>
                <div id='empty-1' className='projectItem emptyProjectItem'></div>
                <div id='empty-2' className='projectItem emptyProjectItem'></div>
                <div id='empty-3' className='projectItem emptyProjectItem'></div>
                <div id='eli' className='projectItem overlay'>
                    <p className='bold projectTitle'><span className='smallText'>2023</span><br/>ELI</p>
                </div>
                <div id='empty-4' className='projectItem emptyProjectItem'></div>
                <div id='empty-5' className='projectItem emptyProjectItem'></div>
                <div id='empty-6' className='projectItem emptyProjectItem'></div>
                <div id='tuneblr' className='projectItem overlay'>
                    <p className='bold projectTitle'><span className='smallText'>2023</span><br/>tuneblr</p>
                </div>
                <div id='empty-7' className='projectItem emptyProjectItem'></div>
            </div>
        </div>
    );
}

export default Projects;