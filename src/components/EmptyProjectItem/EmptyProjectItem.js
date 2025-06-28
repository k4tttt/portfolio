import React, { useState } from 'react';
import { Link } from "react-router-dom";

const EmptyProjectItem = ({ id }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to='' id={id} className='projectItem emptyProjectItem' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
      <div>
        <img className={`bubbles ${isHovered ? 'visible' : ''}`} src={process.env.PUBLIC_URL + '/images/bubbles.gif'} alt='Bubbles' />
        <p className='bold smallerText'>Stay tuned...</p>
      </div>
    </Link>
  );
}

export default EmptyProjectItem;
