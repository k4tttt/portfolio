import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faClipboard, faClock } from '@fortawesome/free-regular-svg-icons';

const Tuneblr = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
    }, []);

    return (
        <main className='projectPage'>
            <HelmetProvider>
                <Helmet>
                    <title>Tyra Wodén | tuneblr</title>
                </Helmet>
            </HelmetProvider>

            <div className='projectSummary'>
                <div>
                    <Link to='/' className='smallerText' style={{ marginRight: '8px' }}>Tyra Wodén</Link>
                    <FontAwesomeIcon icon={faAngleRight} className='smallerText'></FontAwesomeIcon>
                    <Link to={{}} className='smallerText'>tuneblr</Link>
                </div>
                <div className='projectSummaryContent'>
                    <div className='titleTable'>
                        <h2 className='BLACKOUT'>tuneblr</h2>
                        <p className='smallText'>A web application where users can create and share their own mixtapes. A database keeps track of the web app's data.</p>
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
                                    <td>Web development, databases, UX/UI design</td>
                                    <td>3 weeks</td>
                                    <td>.NET, C#, SQL, Visual Studio, Azure Data Studio, Docker</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/mixtape.png'} alt='tuneblr mixtape' />
                    </div>
                </div>
            </div>

            <div className='projectContent'>
                <div className='projectDescription'>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/tuneblr_startpage.png'} alt='tuneblr start page' />
                        <p className='bold smallText'>Start page</p>
                    </div>
                    <div className='descriptionText'>
                        <h3 className='BLACKOUT'>description</h3>
                        <p className=''>
                            The tuneblr website was created as part of the <Link className='blue' to='https://www.umu.se/utbildning/kurser/databasteknik-och-webbaserade-system/' target="_blank" rel="noopener noreferrer">Databases and Web Based Systems</Link> course. The
                            task was to develop a web application connected to an underlying database, using the ASP.NET
                            Core MVC framework and SQL database.
                        </p>
                        <br />
                        <h3 className='BLACKOUT'>results</h3>
                        <p className=''>
                            The result of the project is in form of a web app where users can <span className='green'>register</span> an account, and
                            then <span className='green'>create</span> mixtapes that can be shared with other users. Mixtapes are shared via email
                            through an SMTP server. Users can also <span className='green'>browse</span> among all mixtapes that exist in the database,
                            and sort them by different tags such as “pop”, “electronic” or “swedish”. Login is handled via
                            cookies, and passwords are encrypted before stored in the database.
                        </p>
                    </div>
                </div>
                <div>
                    <div className='desktops'>
                        <div>
                            <img src={process.env.PUBLIC_URL + '/images/tuneblr_customize_profile.png'} alt='tuneblr customize profile' />
                            <p className='bold smallText'>Customize your profile</p>
                        </div>
                        <div>
                            <img src={process.env.PUBLIC_URL + '/images/tuneblr_profile.png'} alt='tuneblr profile' />
                            <p className='bold smallText'>View user profiles</p>
                        </div>
                    </div>
                    <div className='desktops'>
                        <div>
                            <img src={process.env.PUBLIC_URL + '/images/tuneblr_create_mixtape.png'} alt='tuneblr create mixtape' />
                            <p className='bold smallText'>Create mixtapes</p>
                        </div>
                        <div>
                            <img src={process.env.PUBLIC_URL + '/images/tuneblr_browse_mixtapes.png'} alt='tuneblr browse mixtapes' />
                            <p className='bold smallText'>Browse mixtapes</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Tuneblr;