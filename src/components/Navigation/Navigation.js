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
            className={`${styles['nav-button']} ${activeSection === 'projects' ? styles['active'] : ''}`}>
            <FontAwesomeIcon icon={faFolderOpen} />
            <div className={styles['button-text']}>Projects</div>
          </button>
        </li>
        <li className={styles['nav-item']}>
          <button
            onClick={() => navigateToSection('education')}
            className={`${styles['nav-button']} ${activeSection === 'education' ? styles['active'] : ''}`}>
            <FontAwesomeIcon icon={faGraduationCap} />
            <div className={styles['button-text']}>Education</div>
          </button>
        </li>
        <li className={styles['nav-item']}>
          <button
            onClick={() => navigateToSection('work-experience')}
            className={`${styles['nav-button']} ${activeSection === 'work-experience' ? styles['active'] : ''}`}>
            <FontAwesomeIcon icon={faBriefcase} />
            <div className={styles['button-text']}>Work experience</div>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
