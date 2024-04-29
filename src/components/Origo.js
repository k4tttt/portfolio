import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faClipboard, faClock } from '@fortawesome/free-regular-svg-icons';

const Origo = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
    }, []);

    return (
        <main>
            <div className='projectSummary'>
                <div>
                    <Link to='/' className='smallerText' style={{ marginRight: '8px' }}>Tyra Wodén</Link>
                    <FontAwesomeIcon icon={faAngleRight} className='smallerText'></FontAwesomeIcon>
                    <Link to='/origo' className='smallerText'>Marketing at Kårhuset Origo</Link>
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
                        <img src='/images/origo_summary.png' alt='Summary of Origo content' />
                    </div>
                </div>
            </div>

            <div className='projectContent'>
                <div className='projectSummaryContent'>
                    <div>
                        <p className='bold'>Weekly posts</p>
                        <img src='/images/origo_weekly.png' alt='Origo weekly posts' />
                    </div>
                    <div>
                        <h3 className='BLACKOUT'>description</h3>
                        <p className=''>
                            I am currently working as a team member in the PR group at Kårhuset Origo.
                            Two peers and I started this group in October 2023, in order to improve
                            Origo's presence on social media. Since then, Origo has gone from inconsistency
                            and a lack of graphic personality, to <span className='green'>regularity</span> and a <span className='pink'>uniform graphic appearence</span>.
                        </p>
                        <br />
                        <h3 className='BLACKOUT'>results</h3>
                        <p className=''>
                            The result of the PR group's work consists of <span className='blue'>weekly posts</span> on Instagram and Facebook
                            that inform Umeå's students about what will happen at Kårhuset Origo during the week.
                            <span className='green'> Posters</span> and more elaborate graphic content is created for bigger events.
                        </p>
                    </div>
                </div>
                <div className='posters'>
                    <p className='bold'>DJ posters for the Club X event (spring 2024)</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <img src='/images/dj_fribb.png' alt='Origo poster - DJ Fribb' />
                        <img src='/images/dj_larsson.png' alt='Origo poster - DJ Larsson' />
                        <img src='/images/frtetude.png' alt='Origo poster - Frtetude' />
                        <img src='/images/axelerate.png' alt='Origo poster - Axelerate' />
                        <img src='/images/dj_rippen.png' alt='Origo poster - DJ Rippen' />
                    </div>
                </div>
                <div className='posters'>
                    <p className='bold'>Posters</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <img src='/images/discOrigo_poster.png' alt='Origo poster - DiscOrigo 2023' />
                        <img src='/images/clubxvt24_poster.png' alt='Origo poster - Club X VT24' />
                        <img src='/images/masterimassa_poster.png' alt='Origo poster - Mästerimässa' />
                        <img src='/images/clubxht23_poster.png' alt='Origo poster - Club X HT23' />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Origo;