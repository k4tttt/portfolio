import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faClipboard, faClock } from '@fortawesome/free-regular-svg-icons';
import styles from './ProjectSummary.module.css'
import Title from '../Title/Title';

const ProjectSummary = ({ title, displayName, subtitle, tasks, duration, tools }) => {

  return (
    <div>
      <Title type='h2' title={title} clarification={displayName} under={true} />
      {/* <h2 className='BLACKOUT'>{title}</h2> */}
      <p className='smallText' style={{ maxWidth: '50vw' }}>{subtitle}</p>
      <table>
        <thead>
          <tr className={styles['rowBorder']}>
            <th>
              <div><FontAwesomeIcon icon={faClipboard}></FontAwesomeIcon>Tasks</div>
              <hr />
            </th>
            <th>
              <div><FontAwesomeIcon icon={faClock}></FontAwesomeIcon>Duration</div>
              <hr />
            </th>
            <th>
              <div><FontAwesomeIcon icon={faScrewdriverWrench}></FontAwesomeIcon>Tools</div>
              <hr />
            </th>
          </tr>
        </thead>
        <tbody className='smallText'>
          <tr>
            <td>{tasks}</td>
            <td>{duration}</td>
            <td>{tools}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProjectSummary;