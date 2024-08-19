import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Projects = () => {
  const [isHovered, setIsHovered] = useState('');

  return (
    <div id='projects'>
      <h2 className='BLACKOUT'>projects</h2>
      <p className='smallText'>Here are some projects that I have worked on.</p>
      <div id='projectContainer'>
        <Link to='origo' id='origo' className='projectItem overlay'>
          <div>
            <ul className='projectTags'>
              <li className='smallerText'>Graphic design</li>
              <li className='smallerText'>Marketing</li>
              <li className='smallerText'>Figma</li>
            </ul>
            <p className='bold projectTitle'><span className='smallText'>2023-</span><br />Marketing at Kårhuset Origo</p>
            <img src={process.env.PUBLIC_URL + '/images/origo_preview.png'} alt='Origo' />
          </div>
        </Link>
        <Link to='idaginatt' id='idaginatt' className='projectItem overlay'>
          <div>
            <ul className='projectTags'>
              <li className='smallerText'>Graphic design</li>
              <li className='smallerText'>Marketing</li>
              <li className='smallerText'>HTML</li>
              <li className='smallerText'>CSS</li>
              <li className='smallerText'>Figma</li>
            </ul>
            <p className='bold projectTitle'><span className='smallText'>2022-2023</span><br />IDag&Inatt</p>
            <img src={process.env.PUBLIC_URL + '/images/idaginatt_preview.png'} alt='IDag&Inatt' />
          </div>
        </Link>
        <Link to='discogs' id='discogs' className='projectItem overlay'>
          <div>
            <ul className='projectTags'>
              <li className='smallerText'>HTML</li>
              <li className='smallerText'>CSS</li>
              <li className='smallerText'>JavaScript</li>
              <li className='smallerText'>React</li>
            </ul>
            <p className='bold projectTitle'><span className='smallText'>2023</span><br />Redesigning Discogs</p>
            <img src={process.env.PUBLIC_URL + '/images/discogs_preview.png'} alt='Discogs' />
          </div>
        </Link>
        <Link to='https://people.cs.umu.se/~id21twn/kanyeornay/' id='kanyegame' className='projectItem overlay'>
          <div>
            <ul className='projectTags'>
              <li className='smallerText'>API:s</li>
              <li className='smallerText'>React</li>
            </ul>
            <p className='bold projectTitle'><span className='smallText'>2024</span><br />Kanye or nay?</p>
            <img src={process.env.PUBLIC_URL + '/images/kanyeornay_background.png'} alt='Kanye or nay?' />
          </div>
        </Link>
        <Link to='' id='empty-2' className='projectItem emptyProjectItem' onMouseEnter={() => setIsHovered('empty-2')} onMouseLeave={() => setIsHovered('')} >
          <div>
            <img className={`bubbles ${isHovered === 'empty-2' ? 'visible' : ''}`} src={process.env.PUBLIC_URL + '/images/bubbles.gif'} alt='Bubbles' />
            <p className='bold projectTitle'><span className='smallerText green'>Stay tuned...</span><br /></p>
          </div>
        </Link>
        <Link to='forgetmenot' id='forgetmenot' className='projectItem overlay'>
          <div>
            <ul className='projectTags'>
              <li className='smallerText'>Internet of Things</li>
              <li className='smallerText'>Node.js</li>
              <li className='smallerText'>Node-RED</li>
            </ul>
            <p className='bold projectTitle'><span className='smallText'>2024</span><br />forget-me-not</p>
            <img src={process.env.PUBLIC_URL + '/images/forgetmenot_preview.png'} alt='forget-me-not' />
          </div>
        </Link>
        <Link to='eli' id='eli' className='projectItem overlay'>
          <div>
            <ul className='projectTags'>
              <li className='smallerText'>UX/UI design</li>
              <li className='smallerText'>Figma</li>
              <li className='smallerText'>Interviews</li>
            </ul>
            <p className='bold projectTitle'><span className='smallText'>2023</span><br />ELI</p>
            <img src={process.env.PUBLIC_URL + '/images/eli_preview.png'} alt='ELI' />
          </div>
        </Link>
        <Link to='' id='empty-4' className='projectItem emptyProjectItem' onMouseEnter={() => setIsHovered('empty-4')} onMouseLeave={() => setIsHovered('')}>
          <div>
            <img className={`bubbles ${isHovered === 'empty-4' ? 'visible' : ''}`} src={process.env.PUBLIC_URL + '/images/bubbles.gif'} alt='Bubbles' />
            <p className='bold projectTitle'><span className='smallerText pink'>Stay tuned...</span><br /></p>
          </div>
        </Link>
        <Link to='handwritten_digits' id='handwritten_digits' className='projectItem overlay'>
          <div>
            <ul className='projectTags'>
              <li className='smallerText'>AI</li>
              <li className='smallerText'>Machine learning</li>
              <li className='smallerText'>Python</li>
            </ul>
            <p className='bold projectTitle'><span className='smallText'>2023</span><br />Handwritten Digits</p>
            <img src={process.env.PUBLIC_URL + '/images/handwritten_digit.png'} alt='Handwritten digit' />
          </div>
        </Link>
        <Link to='brainfunc_beats' id='brainfunc_beats' className='projectItem overlay'>
          <div>
            <ul className='projectTags'>
              <li className='smallerText'>UX/UI design</li>
              <li className='smallerText'>Project management</li>
              <li className='smallerText'>JavaScript</li>
            </ul>
            <p className='bold projectTitle'><span className='smallText'>2024</span><br />Brainfunc Beats</p>
            <img src={process.env.PUBLIC_URL + '/images/brainfunc_beats_bakgrund.png'} alt='Brainfunc Beats' />
          </div>
        </Link>
        <Link to='tuneblr' id='tuneblr' className='projectItem overlay'>
          <div>
            <ul className='projectTags'>
              <li className='smallerText'>Databases</li>
              <li className='smallerText'>.NET</li>
              <li className='smallerText'>C#</li>
              <li className='smallerText'>SQL</li>
              <li className='smallerText'>UX/UI design</li>
            </ul>
            <p className='bold projectTitle'><span className='smallText'>2023</span><br />tuneblr</p>
            <img src={process.env.PUBLIC_URL + '/images/tuneblr_preview.png'} alt='tuneblr' />
          </div>
        </Link>
        <Link to='' id='empty-7' className='projectItem emptyProjectItem' onMouseEnter={() => setIsHovered('empty-7')} onMouseLeave={() => setIsHovered('')}>
          <div>
            <img className={`bubbles ${isHovered === 'empty-7' ? 'visible' : ''}`} src={process.env.PUBLIC_URL + '/images/bubbles.gif'} alt='Bubbles' />
            <p className='bold projectTitle'><span className='smallerText pink'>Stay tuned...</span><br /></p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
