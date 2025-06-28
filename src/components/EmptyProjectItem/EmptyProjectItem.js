import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './EmptyProjectItem.module.css'
import projectItemStyles from '../ProjectItem/ProjectItem.module.css'

const EmptyProjectItem = ({ id }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to=''
      id={id}
      className={`${projectItemStyles.projectItem} ${styles.emptyProjectItem}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div>
        <img className={`${styles.bubbles} ${isHovered ? styles.visible : ''}`} src={process.env.PUBLIC_URL + '/images/bubbles.gif'} alt='Bubbles' />
        <p className='bold smallerText'>Stay tuned...</p>
      </div>
    </Link>
  );
}

export default EmptyProjectItem;
