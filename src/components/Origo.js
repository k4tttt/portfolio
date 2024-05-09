import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faClipboard, faClock } from '@fortawesome/free-regular-svg-icons';

const Origo = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
    }, []);

    return (
        <main>
            <HelmetProvider>
                <Helmet>
                    <title>Tyra Wodén | Marketing at Kårhuset Origo</title>
                </Helmet>
            </HelmetProvider>

            <div className='projectSummary'>
                <div>
                    <Link to='/' className='smallerText' style={{ marginRight: '8px' }}>Tyra Wodén</Link>
                    <FontAwesomeIcon icon={faAngleRight} className='smallerText'></FontAwesomeIcon>
                    <Link to={{}} className='smallerText'>Marketing at Kårhuset Origo</Link>
                </div>
                <div className='projectSummaryContent'>
                    <div>
                        <h2 className='BLACKOUT'>marketing at karhuset origo</h2>
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
                                    <td>Graphic design, marketing strategy</td>
                                    <td>Ongoing since October 2023</td>
                                    <td>Figma, Canva</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/origo_summary.png'} alt='Summary of Origo content' />
                    </div>
                </div>
            </div>

            <div className='projectContent'>
                <div className='projectDescription'>
                    <div>
                        <p className='bold'>Weekly posts</p>
                        <img src={process.env.PUBLIC_URL + '/images/origo_weekly.png'} alt='Origo weekly posts' />
                    </div>
                    <div>
                        <h3 className='BLACKOUT'>description</h3>
                        <p className=''>
                            I am currently working as a team member in the PR group at Kårhuset Origo.
                            Two peers and I started this group in October 2023, in order to improve
                            Origo's presence on social media. Since then, Origo's socials have gone from inconsistent
                            and lacking of graphic personality, to <span className='green'>regular</span> and with a <span className='green'>uniform graphic appearence</span>.
                        </p>
                        <br />
                        <h3 className='BLACKOUT'>results</h3>
                        <p className=''>
                            The result of the PR group's work consists of <span className='green'>weekly posts</span> on Instagram and Facebook
                            that inform Umeå's students about what will happen at Kårhuset Origo during the week.
                            <span className='green'> Posters</span> and more elaborate graphic content is created for bigger events.
                        </p>
                    </div>
                </div>
                <div className='posters'>
                    <p className='bold'>DJ posters for the Club X event (spring 2024)</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <img src={process.env.PUBLIC_URL + '/images/dj_fribb.png'} alt='Origo poster - DJ Fribb' />
                        <img src={process.env.PUBLIC_URL + '/images/dj_larsson.png'} alt='Origo poster - DJ Larsson' />
                        <img src={process.env.PUBLIC_URL + '/images/frtetude.png'} alt='Origo poster - Frtetude' />
                        <img src={process.env.PUBLIC_URL + '/images/axelerate.png'} alt='Origo poster - Axelerate' />
                        <img src={process.env.PUBLIC_URL + '/images/dj_rippen.png'} alt='Origo poster - DJ Rippen' />
                    </div>
                </div>
                <div className='posters'>
                    <p className='bold'>Posters for events</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <img src={process.env.PUBLIC_URL + '/images/discOrigo_poster.png'} alt='Origo poster - DiscOrigo 2023' />
                        <img src={process.env.PUBLIC_URL + '/images/clubxvt24_poster.png'} alt='Origo poster - Club X VT24' />
                        <img src={process.env.PUBLIC_URL + '/images/masterimassa_poster.png'} alt='Origo poster - Mästerimässa' />
                        <img src={process.env.PUBLIC_URL + '/images/clubxht23_poster.png'} alt='Origo poster - Club X HT23' />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Origo;