import { Link } from "react-router-dom";
import styles from './ProjectItem.module.css'

const ProjectItem = ({ project }) => {

  return (
    <Link to={project.to} id={project.id} className={`${styles.projectItem} ${styles.overlay}`}>
      <div>
        <ul className={styles.projectTags}>
          {project.tags.map((tag, index) => (
            <li key={index} className='smallerText'>{tag}</li>
          ))}
        </ul>
        <p className={`bold ${styles.projectTitle}`}><span className='smallText'>{project.year}</span><br />{project.title}</p>
        
        <div className={styles.imageWrapper}>
          <img src={process.env.PUBLIC_URL + project.image} alt={project.title} />
          <div className={styles.imageOverlay}></div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectItem;
