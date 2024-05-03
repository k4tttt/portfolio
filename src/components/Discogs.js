import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faClipboard, faClock } from '@fortawesome/free-regular-svg-icons';

const Discogs = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
    }, []);

    return (
        <main>
            <div className='projectSummary'>
                <div>
                    <Link to='/' className='smallerText' style={{ marginRight: '8px' }}>Tyra Wodén</Link>
                    <FontAwesomeIcon icon={faAngleRight} className='smallerText'></FontAwesomeIcon>
                    <Link to={{}} className='smallerText'>Discogs</Link>
                </div>
                <div className='projectSummaryContent'>
                    <div>
                        <h2 className='BLACKOUT'>redesigning discogs</h2>
                        <p className='smallText'>Discogs is a website for idek lol</p>
                        <table>
                            <thead>
                                <tr className='rowBorder'>
                                    <th><FontAwesomeIcon icon={faClipboard}></FontAwesomeIcon>Tasks</th>
                                    <th><FontAwesomeIcon icon={faClock}></FontAwesomeIcon>Duration</th>
                                    <th><FontAwesomeIcon icon={faScrewdriverWrench}></FontAwesomeIcon>Tools</th>
                                </tr>
                            </thead>
                            <tbody className='smallText'>
                                <tr>
                                    <td>UX/UI design</td>
                                    <td>2 months</td>
                                    <td>Figma, HTML, CSS, JavaScript, React</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <img src='' alt='Discogs redesign' />
                    </div>
                </div>
            </div>

            <div className='projectContent'>
                <div className='projectSummaryContent'>
                    <div>
                        <img src='' alt='' />
                    </div>
                    <div>
                        <h3 className='BLACKOUT'>description</h3>
                        <p className=''>
                            Redesigning elements of the Discogs website was preformed a part of the <Link className='green' to='https://www.umu.se/utbildning/kurser/webbteknik-for-ingenjorer/' target="_blank" rel="noopener noreferrer">Web Technology for Engineers</Link> course. The 
                            task was split into four parts: paper prototyping, developing using HTML and CSS, adding JavaScript to the website, and lastly, using the React framework 
                            to recreate the already developed website.
                        </p>
                        <br />
                        <h3 className='BLACKOUT'>results</h3>
                        <p className=''>
                            The result of 
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Discogs;