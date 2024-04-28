import React from 'react';
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div id='projects'>
            <h2 className='BLACKOUT'>projects</h2>
            <p className='smallText'>Here are some projects that I have worked on.</p>
            <div id='projectContainer'>
                <Link to='origo' id='origo' className='projectItem overlay'>
                    <div>
                        <p className='bold projectTitle'><span className='smallText'>2023-</span><br />Marketing at Kårhuset Origo</p>
                        <img src='/images/origo_preview.png' alt='Origo' />
                    </div>
                </Link>
                <Link to='idaginatt' id='idaginatt' className='projectItem overlay'>
                    <div>
                        <p className='bold projectTitle'><span className='smallText'>2022-2023</span><br />IDag&Inatt</p>
                        <img src='/images/idaginatt_preview.png' alt='IDag&Inatt' />
                    </div>
                </Link>
                <Link to='discogs' id='discogs' className='projectItem overlay'>
                    <div>
                        <p className='bold projectTitle'><span className='smallText'>2023</span><br />Redesigning Discogs</p>
                        <img src='/images/discogs_preview.png' alt='Discogs' />
                    </div>
                </Link>
                <Link to='' id='empty-1' className='projectItem emptyProjectItem'>
                    <div><p className='bold projectTitle'><span className='smallerText green'>Stay tuned...</span><br /></p></div>
                </Link>
                <Link to='' id='empty-2' className='projectItem emptyProjectItem'>
                    <div><p className='bold projectTitle'><span className='smallerText blue'>Stay tuned...</span><br /></p></div>
                </Link>
                <Link to='' id='empty-3' className='projectItem emptyProjectItem'>
                    <div><p className='bold projectTitle'><span className='smallerText pink'>Stay tuned...</span><br /></p></div>
                </Link>
                <Link to='eli' id='eli' className='projectItem overlay'>
                    <div>
                        <p className='bold projectTitle'><span className='smallText'>2023</span><br />ELI</p>
                        <img src='/images/eli_preview.png' alt='ELI' />
                    </div>
                </Link>
                <Link to='' id='empty-4' className='projectItem emptyProjectItem'>
                    <div><p className='bold projectTitle'><span className='smallerText pink'>Stay tuned...</span><br /></p></div>
                </Link>
                <Link to='' id='empty-5' className='projectItem emptyProjectItem'>
                    <div><p className='bold projectTitle'><span className='smallerText green'>Stay tuned...</span><br /></p></div>
                </Link>
                <Link to='' id='empty-6' className='projectItem emptyProjectItem'>
                    <div><p className='bold projectTitle'><span className='smallerText blue'>Stay tuned...</span><br /></p></div>
                </Link>
                <Link to='tuneblr' id='tuneblr' className='projectItem overlay'>
                    <div>
                        <p className='bold projectTitle'><span className='smallText'>2023</span><br />tuneblr</p>
                        <img src='/images/tuneblr_preview.png' alt='tuneblr' />
                    </div>
                </Link>
                <Link to='' id='empty-7' className='projectItem emptyProjectItem'>
                    <div><p className='bold projectTitle'><span className='smallerText pink'>Stay tuned...</span><br /></p></div>
                </Link>
            </div>
        </div>
    );
}

export default Projects;
