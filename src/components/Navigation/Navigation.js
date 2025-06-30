import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import styles from './Navigation.module.css'

const Navigation = ({ activeSection }) => {

  const navigateToSection = (section) => {
    const toSection = document.getElementById(section);

    if (toSection) {
      toSection.scrollIntoView({ behavior: 'smooth' });
      // setActiveSection(section);
    }
  };

  return (
    <nav id={styles['navigation']}>
      <ul className={styles['nav-container']}>
        <li className={styles['nav-item']}>
          <button
            onClick={() => navigateToSection('projects')}
            className={activeSection === 'projects' ? styles['active'] : ''}>
            <FontAwesomeIcon icon={faFolderOpen} />Projects
          </button>
        </li>
        <li className={styles['nav-item']}>
          <button
            onClick={() => navigateToSection('education')}
            className={activeSection === 'education' ? styles['active'] : ''}>
            <FontAwesomeIcon icon={faGraduationCap} />Education
          </button>
        </li>
        <li className={styles['nav-item']}>
          <button
            onClick={() => navigateToSection('work-experience')}
            className={activeSection === 'work-experience' ? styles['active'] : ''}>
            <FontAwesomeIcon icon={faBriefcase} />Work experience
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
