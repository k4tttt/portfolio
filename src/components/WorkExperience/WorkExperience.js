import { Link } from 'react-router-dom';
import Title from '../Title/Title';
import styles from './WorkExperience.module.css'

const WorkExperience = () => {

  return (
    <div id='work-experience'>
      <div className={styles['section-content']}>
        <div style={{ marginRight: '6vw' }}>
          <Title title={'work experience'} type={'h2'} />

          <div className={styles['work-experience-content']}>
            <div className={styles['work-experience-item']}>
              <div className={styles['timeline']}>
                <p>2025 - 2026</p>
                <div className={styles['timeline-line']}></div>
              </div>

              <div className={styles['description']}>
                <h3>Software Developer – ITS</h3>
                At <Link className='blue' to='https://www.linkedin.com/company/itsumea/' target='_blank' rel='noopener noreferrer'>ITS at Umeå University</Link>, 
                I worked as a Software Developer of a web tool for administrators of the Swedish student admissions system. Tasks included both frontend 
                development in Angular and backend development in Java.
              </div>
            </div>

            <div className={styles['work-experience-item']}>
              <div className={styles['timeline']}>
                <p>2024</p>
                <div className={styles['timeline-line']}></div>
              </div>

              <div className={styles['description']}>
                <h3>UX Designer/Developer – Tieto (Tietoevry)</h3>
                During the summer I worked as a UX Designer and Frontend Developer at <Link className='blue' to='https://www.linkedin.com/company/tieto/' target='_blank' rel='noopener noreferrer'>Tieto</Link>.
                I developed a web application for visualizing error log data. 
                The project included researching and prototyping, followed by development of a React application solving the problem of 
                log data visualizing.
              </div>
            </div>
          </div>
        </div>

        <img className={styles['image']} src={process.env.PUBLIC_URL + '/images/person_working.png'} alt='Person working by laptop' />
      </div>

    </div>
  );
}

export default WorkExperience;