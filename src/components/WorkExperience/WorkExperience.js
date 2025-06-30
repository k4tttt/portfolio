import { Link } from 'react-router-dom';
import Title from '../Title/Title';
import styles from './WorkExperience.module.css'

const WorkExperience = () => {

  return (
    <div id='work-experience'>
      <div className='section-content'>
        <div style={{ marginRight: '6vw' }}>
          <Title title={'work experience'} type={'h2'} />

          <div className={styles['work-experience-content']}>
            <div className={styles['work-experience-item']}>
              <div className={styles['timeline']}>
                <p>2025</p>
                <div className={styles['timeline-line']}></div>
              </div>

              <div className={styles['description']}>
                I am working as a System Developer at <Link className='blue' to='https://www.linkedin.com/company/itsumea/' target='_blank' rel='noopener noreferrer'>ITS at Umeå University</Link>. 
                As part of a team that works with the student admissions system, I work with both backend and frontend development.
              </div>
            </div>

            <div className={styles['work-experience-item']}>
              <div className={styles['timeline']}>
                <p>2024</p>
                <div className={styles['timeline-line']}></div>
              </div>

              <div className={styles['description']}>
                During the summer I worked as a UX Designer and Software Developer at <Link className='blue' to='https://www.linkedin.com/company/tietoevry/posts/' target='_blank' rel='noopener noreferrer'>Tietoevry</Link>.
                Together with another summer intern, I developed a web application for visualizing large amounts of log data.
                The project began with researching and prototyping, after which a React application was developed according to the users' 
                needs.  
              </div>
            </div>
          </div>
        </div>

        <img width={400} src={process.env.PUBLIC_URL + '/images/computer_and_books.png'} alt='Computer and books' />
      </div>

    </div>
  );
}

export default WorkExperience;