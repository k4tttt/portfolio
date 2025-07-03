import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ProjectSummary from '../components/ProjectSummary/ProjectSummary';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Title from '../components/Title/Title';

const Yotei = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);

  return (
    <main className='projectPage'>
      <HelmetProvider>
        <Helmet>
          <title>Tyra Wodén | Yotei</title>
        </Helmet>
      </HelmetProvider>

      <div className='projectSummary'>
        <Breadcrumb forPage={'Yotei'} />

        <div className='projectSummaryContent'>
          <ProjectSummary
            title={'yotei'}
            subtitle={'The Yotei app is a jujutsu training planner for Umeå Budoklubb.'}
            tasks={'Frontend and backend development, UX/UI design'}
            duration={'1 month, 100%'}
            tools={'Agile/Scrum, React, Java, Figma'}
          />
          <div>
            <img src={process.env.PUBLIC_URL + '/images/yotei/judo.png'} alt='Judo' />
          </div>
        </div>
      </div>

      <div className='projectContent'>
        <div className='projectDescription'>
          <div className='descriptionImage'>
            <img src={process.env.PUBLIC_URL + '/images/yotei/yotei_plan.png'} alt='Yotei training plan' />
          </div>
          <div className='descriptionText'>
            <Title type='h3' title={'description'} />
            <p className=''>
              The Yotei project was performed as part of the <Link className="blue" to="https://www.umu.se/utbildning/kurser/programvaruteknik2/" target="_blank" rel="noopener noreferrer">Software Engineering</Link> course, 
              in collaboration with <Link className="blue" to="https://www.umeabudoklubb.se/" target="_blank" rel="noopener noreferrer">Umeå Budoklubb</Link>. 
              The task was to continue developing an already existing jujutsu training planner web application, while simulating a 
              real life work environment. The project group consisted of three teams with 8-9 people each, where all teams cooperated 
              under the Scrum framework. During the project I had the role of Scrum master in my team. 
            </p>
            <br />
            <Title type='h3' title={'results'} />
            <p className=''>
              The results of the project were four deliveries containing many bugfixes and UX improvements of the application, 
              as well as some new features. Beyond deliverables, my team and the project group as a whole gained many valuable 
              skills in agile development and communication. 
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Yotei;