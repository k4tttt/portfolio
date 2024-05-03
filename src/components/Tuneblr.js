import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faClipboard, faClock } from '@fortawesome/free-regular-svg-icons';

const Tuneblr = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
    }, []);

    return (
        <main>
            <div className='projectSummary'>
                <div>
                    <Link to='/' className='smallerText' style={{ marginRight: '8px' }}>Tyra Wodén</Link>
                    <FontAwesomeIcon icon={faAngleRight} className='smallerText'></FontAwesomeIcon>
                    <Link to={{}} className='smallerText'>tuneblr</Link>
                </div>
                <div className='projectSummaryContent'>
                    <div>
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
                        <img src='/images/mixtape.png' alt='tuneblr mixtape' />
                    </div>
                </div>
            </div>

            <div className='projectContent'>
                <div className='projectSummaryContent'>
                    <div>
                        <img src='/images/tuneblr_sample.png' alt='tuneblr samples' />
                    </div>
                    <div>
                        <h3 className='BLACKOUT'>description</h3>
                        <p className=''>
                            The tuneblr website was created as part of the <Link className='green' to='https://www.umu.se/utbildning/kurser/databasteknik-och-webbaserade-system/' target="_blank" rel="noopener noreferrer">Databases and Web Based Systems</Link> course. The
                            task was to develop a web application connected to an underlying database, using the ASP.NET
                            Core MVC framework and SQL database.
                        </p>
                        <br />
                        <h3 className='BLACKOUT'>results</h3>
                        <p className=''>
                            The result of the project is in form of a web app where users can <span className='blue'>register</span> an account, and 
                            then <span className='pink'>create</span> mixtapes that can be shared with other users. Mixtapes are shared via email 
                            through an SMTP server. Users can also <span className='green'>browse</span> among all mixtapes that exist in the database, 
                            and sort them by different tags such as “pop”, “electronic” or “swedish”. Login is handled via 
                            cookies, and passwords are encrypted before stored in the database.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Tuneblr;