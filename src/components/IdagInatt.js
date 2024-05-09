import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faClipboard, faClock } from '@fortawesome/free-regular-svg-icons';

const IdagInatt = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
    }, []);

    return (
        <main>
            <HelmetProvider>
                <Helmet>
                    <title>Tyra Wodén | IDag&Inatt</title>
                </Helmet>
            </HelmetProvider>

            <div className='projectSummary'>
                <div>
                    <Link to='/' className='smallerText' style={{ marginRight: '8px' }}>Tyra Wodén</Link>
                    <FontAwesomeIcon icon={faAngleRight} className='smallerText'></FontAwesomeIcon>
                    <Link to={{}} className='smallerText'>IDag&Inatt</Link>
                </div>
                <div className='projectSummaryContent'>
                    <div>
                        <h2 className='BLACKOUT'>idag&inatt</h2>
                        <p className='smallText'>IDag&Inatt is a yearly labor market day for students at the M.Sc. program in Interaction Technology and Design.</p>
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
                                    <td>Graphic design, marketing, web development</td>
                                    <td>8 months</td>
                                    <td>Figma, HTML, CSS</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/idaginatt_sample.png'} alt='IDag&Inatt 2023 samples' />
                    </div>
                </div>
            </div>

            <div className='projectContent'>
                <div className='projectDescription'>
                    <div>
                        <p className='bold'>Website landing page</p>
                        <img src={process.env.PUBLIC_URL + '/images/idaginatt_desktop.png'} alt='IDag&Inatt 2023 desktop' />
                    </div>
                    <div>
                        <h3 className='BLACKOUT'>description</h3>
                        <p className=''>
                            I was part of the PR team for the 2023 edition of IDag&Inatt. The task was to
                            create marketing content and a graphic profile based on the theme <span className='green'>80's arcade</span>, in
                            order to inform students at the M.Sc. program in Interaction Technology and Design about the event.
                        </p>
                        <br />
                        <h3 className='BLACKOUT'>results</h3>
                        <p className=''>
                            The result consisted of a <span className='green'>website</span> with custom graphic elements,
                            containing all information about the event. A
                            series of <span className='green'>Instagram posts</span> were made to further promote the event, and graphic content used
                            during the event itself was created.
                        </p>
                    </div>
                </div>
                <div className='instagramPosts'>
                    <p className='bold'>Instagram posts for event sponsors</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <img src={process.env.PUBLIC_URL + '/images/guldsponsor1.png'} alt='Instagram - Guldsponsor 1' />
                        <img src={process.env.PUBLIC_URL + '/images/guldsponsor2.png'} alt='Instagram - Guldsponsor 2' />
                        <img src={process.env.PUBLIC_URL + '/images/guldsponsor3.png'} alt='Instagram - Guldsponsor 3' />
                        <img src={process.env.PUBLIC_URL + '/images/silversponsor.png'} alt='Instagram - Silversponsor' />
                    </div>
                </div>
                <div className='pacmantetris'>
                    <p className='bold'>Graphic elements on the website</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <img src={process.env.PUBLIC_URL + '/images/pacman1.png'} alt='Pacman 1' />
                        <img src={process.env.PUBLIC_URL + '/images/tetris1.png'} alt='Tetris 1' />
                        <img src={process.env.PUBLIC_URL + '/images/pacman2.png'} alt='Pacman 2' />
                        <img src={process.env.PUBLIC_URL + '/images/tetris2.png'} alt='Tetris 2' />
                        <img src={process.env.PUBLIC_URL + '/images/pacman3.png'} alt='Pacman 3' />
                        <img src={process.env.PUBLIC_URL + '/images/tetris3.png'} alt='Tetris 3' />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default IdagInatt;