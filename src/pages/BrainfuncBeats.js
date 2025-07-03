import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ProjectSummary from '../components/ProjectSummary/ProjectSummary';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Title from '../components/Title/Title';

const BrainfuncBeats = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);

  return (
    <main className='projectPage'>
      <HelmetProvider>
        <Helmet>
          <title>Tyra Wodén | Brainfunc Beats</title>
        </Helmet>
      </HelmetProvider>

      <div className='projectSummary'>
        <Breadcrumb forPage={'Brainfunc Beats'} />

        <div className='projectSummaryContent'>
          <ProjectSummary
            title={'brainfunc beats'}
            subtitle={'Brainfunc Beats: A project aiming to promote fun and easily accessible brain exercise.'}
            tasks={'UX/UI design, project managment'}
            duration={'5 months, 25%'}
            tools={'LoFi- and HiFi-prototyping, end-user testing, Figma, Phaser.js'}
          />
          <div>
            <img style={{ width: '46vh', border: '1px solid var(--light)' }} src={process.env.PUBLIC_URL + '/images/brainfunc_beats_poster.png'} alt='Brainfunc Beats Poster' />
          </div>
        </div>
      </div>

      <div className='projectContent'>
        <div className='projectDescription'>
          <div className='descriptionImage'>
            <img src={process.env.PUBLIC_URL + '/images/beats_prototype.png'} alt='Brainfunc Beats Prototype' />
            {/* <p className='bold smallText'>Sample of images with handwritten numbers</p> */}
          </div>
          <div className='descriptionText'>
            <Title type='h3' title={'description'} />
            <p className=''>
              The Brainfunc Beats project was part of the <Link className='blue' to='https://www.umu.se/utbildning/kurser/produktutveckling-i-medieteknik-med-metoden-design-build-test2/' target="_blank" rel="noopener noreferrer">Product Development in Media Technology using the "Design-build-test" method</Link> course.
              In collaboration with digital agency <Link className='blue' to='https://daresay.co/sv/' target="_blank" rel="noopener noreferrer">Daresay</Link> and
              brain exercise company <Link className='blue' to='https://brainfunc.com/' target="_blank" rel="noopener noreferrer">Brainfunc</Link>,
              the task was to create a concept for a new way to exercise your brain in a fun way.
              {/* To achieve this goal, LoFi- and HiFi-prototyping was highly utilzed.  */}
            </p>
            <p>
              The project group decided to develop a game where players perform movements in rhythm with music.
              A central part of this concept was focusing on the community aspect, and encouraging players to play
              in a group setting (such as during break time at work, at the nursing home, or at home with the family).
            </p>
          </div>
        </div>
        <div className='projectDescription projectDescriptionReverse' style={{ marginTop: '24vh' }}>
          <div className='descriptionText'>
            <Title type='h3' title={'results'} />
            <p className=''>
              The result of the project consists of an interactive web game. The player moves arms and legs according to
              arrows that appear on the screen. Arrows can appear in four different fields of the screen, where each field
              corresponds to a body part. The rhythm of the music is visualized on the screen by the arrows
              gradually being filled up with color.
            </p>
            <p>
              The final version of the game was developed in Phaser.js, a JavaScript framework for creating HTML games.
            </p>
          </div>
          <div className='resultsImage'>
            <img src={process.env.PUBLIC_URL + '/images/beats_demo.gif'} alt='Brainfunc Beats gif' style={{ border: '1px solid var(--light)' }} />
            <p className='bold smallText'>Players playing Brainfunc Beats</p>
          </div>
        </div>
        {/* <div className='desktops'>
          <div>
            <img src={process.env.PUBLIC_URL + '/images/beats_graphic_profile.png'} alt='Brainfunc Beats grapic profile' style={{ width: '50vw', height: 'auto' }}></img>
            <p className='bold smallText'>Brainfunc Beats graphic profile</p>
          </div>
          <div>
          </div>
        </div> */}
      </div>
    </main>
  );
}

export default BrainfuncBeats;