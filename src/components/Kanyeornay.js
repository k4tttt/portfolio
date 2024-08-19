import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faClipboard, faClock } from '@fortawesome/free-regular-svg-icons';

const Kanyeornay = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);

  return (
    <main className='projectPage'>
      <HelmetProvider>
        <Helmet>
          <title>Tyra Wodén | Kanye or Nay</title>
        </Helmet>
      </HelmetProvider>

      <div className='projectSummary'>
        <div>
          <Link to='/' className='smallerText' style={{ marginRight: '8px' }}>Tyra Wodén</Link>
          <FontAwesomeIcon icon={faAngleRight} className='smallerText'></FontAwesomeIcon>
          <Link to={{}} className='smallerText'>Kanye or Nay</Link>
        </div>
        <h3>Coming soon</h3>
      </div>
    </main>
  );
}

export default Kanyeornay;