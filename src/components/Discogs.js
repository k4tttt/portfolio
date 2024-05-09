import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faClipboard, faClock } from '@fortawesome/free-regular-svg-icons';

const Discogs = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
    }, []);

    return (
        <main>
            <HelmetProvider>
                <Helmet>
                    <title>Tyra Wodén | Redesigning Discogs</title>
                </Helmet>
            </HelmetProvider>

            <div className='projectSummary'>
                <div>
                    <Link to='/' className='smallerText' style={{ marginRight: '8px' }}>Tyra Wodén</Link>
                    <FontAwesomeIcon icon={faAngleRight} className='smallerText'></FontAwesomeIcon>
                    <Link to={{}} className='smallerText'>Discogs</Link>
                </div>
                <div className='projectSummaryContent'>
                    <div>
                        <h2 className='BLACKOUT'>redesigning discogs</h2>
                        <p className='smallText'>Discogs is a website where users can buy and sell music. It also serves as a large music database.</p>
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
                        <img src={process.env.PUBLIC_URL + '/images/discogs_desktop_mobile.png'} alt='Discogs redesign' />
                    </div>
                </div>
            </div>

            <div className='projectContent'>
                <div className='projectDescription'>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/discogs_artist.png'} alt='Discogs artist page' />
                        <p className='bold smallText'>Redesigned artist page</p>
                    </div>
                    <div>
                        <h3 className='BLACKOUT'>description</h3>
                        <p className=''>
                            Redesigning elements of the Discogs website was preformed a part of the <Link className='blue' to='https://www.umu.se/utbildning/kurser/webbteknik-for-ingenjorer/' target="_blank" rel="noopener noreferrer">Web Technology for Engineers</Link> course. The 
                            task was split into four parts: paper prototyping, developing using HTML and CSS, adding JavaScript to the website, and lastly, using the React framework 
                            to recreate the already developed website.
                        </p>
                        <br />
                        <h3 className='BLACKOUT'>results</h3>
                        <p className=''>
                            The result consisted of a website that contained three main pages. The first page displayed information about 
                            an artist and their discography. The second page displayed all albums for an artist. The third page displayed details 
                            about a specific album, such as tracklist, credits, and versions.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Discogs;