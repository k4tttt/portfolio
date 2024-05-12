import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faClipboard, faClock } from '@fortawesome/free-regular-svg-icons';

const Forgetmenot = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
    }, []);

    return (
        <main className='projectPage'>
            <HelmetProvider>
                <Helmet>
                    <title>Tyra Wodén | forget-me-not</title>
                </Helmet>
            </HelmetProvider>

            <div className='projectSummary'>
                <div>
                    <Link to='/' className='smallerText' style={{ marginRight: '8px' }}>Tyra Wodén</Link>
                    <FontAwesomeIcon icon={faAngleRight} className='smallerText'></FontAwesomeIcon>
                    <Link to={{}} className='smallerText'>forget-me-not</Link>
                </div>
                <div className='projectSummaryContent'>
                    <div className='titleTable'>
                        <h2 className='BLACKOUT'>forgetmenot</h2>
                        <p className='smallText'>forget-me-not is system that allows you to take care of your plants remotely.</p>
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
                                    <td>Internet of Things, UX/UI design</td>
                                    <td>3 weeks</td>
                                    <td>RPi, ESP32, MQTT, Node-RED, Node.js</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/forgetmenot_background.png'} alt='forget-me-not background' />
                    </div>
                </div>
            </div>

            <div className='projectContent'>
                <div className='projectDescription'>
                    <div className='descriptionImage'>
                        <img src={process.env.PUBLIC_URL + '/images/forgetmenot_ui.png'} alt='forgetmenot UI' />
                        <p className='bold smallText'>Grapical user interface</p>
                    </div>
                    <div className='descriptionText'>
                        <h3 className='BLACKOUT'>description</h3>
                        <p className=''>
                            The forget-me-not project was part of the <Link className='blue' to='https://www.umu.se/utbildning/kurser/design-och-tjansteutveckling-for-internet-of-things/' target="_blank" rel="noopener noreferrer">Service development and design for the Internet of Things</Link> course.
                            The task was to solve a pre-defined problem, using different hardware components that communicated with each other.
                            A graphic user-interface also had to be part of the system.
                        </p>
                        <br />
                        <h3 className='BLACKOUT'>results</h3>
                        <p className=''>
                            The result of the project consists of a two-part system that solves the problem of taking care of plants
                            remotely. The first part of the system is the <span className='green'>plant</span> itself, which is equipped with a watering system
                            and sensors to detect if the plant is in need of care. The second part is an <span className='green'>alarm</span> system that
                            notifies the user when the plant needs care, via music and a flag. The <span className='green'>UI</span> allows the user to see the
                            conditions of the plant, and provide the plant with water and light.
                        </p>
                    </div>
                </div>
                <div className='forgetmenotImages'>
                    <div className='posterContainer'>
                        <div>
                            <img src={process.env.PUBLIC_URL + '/images/forgetmenot_plant.png'} alt='forgetmenot plant'/>
                            <p className='bold smallText'>forget-me-not plant</p>
                        </div>
                        <div>
                            <img src={process.env.PUBLIC_URL + '/images/forgetmenot_alarm.png'} alt='forgetmenot alarm' />
                            <p className='bold smallText'>forget-me-not alarm</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Forgetmenot;