import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faClipboard, faClock } from '@fortawesome/free-regular-svg-icons';

const Eli = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
    }, []);

    return (
        <main className='projectPage'>
            <HelmetProvider>
                <Helmet>
                    <title>Tyra Wodén | ELI</title>
                </Helmet>
            </HelmetProvider>

            <div className='projectSummary'>
                <div>
                    <Link to='/' className='smallerText' style={{ marginRight: '8px' }}>Tyra Wodén</Link>
                    <FontAwesomeIcon icon={faAngleRight} className='smallerText'></FontAwesomeIcon>
                    <Link to={{}} className='smallerText'>ELI</Link>
                </div>
                <div className='projectSummaryContent'>
                    <div className='titleTable'>
                        <h2 className='BLACKOUT'>eli</h2>
                        <p className='smallText'>ELI is a mobile and desktop application that meets the needs of electric vehicle owners.</p>
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
                                    <td>4 weeks</td>
                                    <td>Figma, interviews</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/eli_desktop_mobile.png'} alt='ELI dektop and mobile' />
                    </div>
                </div>
            </div>

            <div className='projectContent'>
                <div className='projectDescription'>
                    <div className='descriptionImage'>
                        <img src={process.env.PUBLIC_URL + '/images/eli_ruttplanerare.png'} alt='ELI routeplanner' />
                        <p className='bold smallText'>Plan a route, both on mobile and desktop</p>
                    </div>
                    <div className='descriptionText'>
                        <h3 className='BLACKOUT'>description</h3>
                        <p className=''>
                            The ELI project was carried out as part of the <Link className='blue' to='https://www.umu.se/utbildning/kurser/design-for-anvandarupplevelse3/' target="_blank" rel="noopener noreferrer">Design for user experience</Link> course. The
                            task was to design a versatile application that meets the needs of electric vehicle owners. To solve the task at hand, <span className='green'>interviews</span> were
                            performed to gather information about the target group. A thorough <span className='green'>use-case scenario</span> was created,
                            and <span className='green'>prototyping</span> on paper and in Figma was performed accordingly.
                        </p>
                        <br />
                        <h3 className='BLACKOUT'>results</h3>
                        <p className=''>
                            The result of the ELI project consists of a HiFi Figma prototype that lets the user perform all tasks within the use-case
                            scenario. This includes planning a route, reserving a charging spot, viewing history over charging, as well as
                            starting, monitoring, and paying for EV charging.
                        </p>
                    </div>
                </div>
                <div className='mobilePrototypes posterContainer'>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/eli_mobile_start.png'} alt='ELI mobile - start' />
                        <p className='bold smallText'>Mobile startscreen</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/eli_mobile_charge.png'} alt='ELI mobile - charge' />
                        <p className='bold smallText'>Scan QR to start charging</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/eli_mobile_charging.png'} alt='ELI mobile - monitor charging' />
                        <p className='bold smallText'>Monitor charging</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/eli_mobile_history.png'} alt='ELI mobile - view history' />
                        <p className='bold smallText'>View charging history</p>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default Eli;