import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faClipboard, faClock } from '@fortawesome/free-regular-svg-icons';

const HandwrittenDigits = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
    }, []);

    return (
        <main>
            <HelmetProvider>
                <Helmet>
                    <title>Tyra Wodén | Handwritten Digits</title>
                </Helmet>
            </HelmetProvider>

            <div className='projectSummary'>
                <div>
                    <Link to='/' className='smallerText' style={{ marginRight: '8px' }}>Tyra Wodén</Link>
                    <FontAwesomeIcon icon={faAngleRight} className='smallerText'></FontAwesomeIcon>
                    <Link to={{}} className='smallerText'>Handwritten Digits</Link>
                </div>
                <div className='projectSummaryContent'>
                    <div>
                        <h2 className='BLACKOUT'>handwritten digits</h2>
                        <p className='smallText'>Classifying handwritten digits by utilizing machine learning.</p>
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
                                    <td>AI, Machine learning, k-NN, ANN</td>
                                    <td>2 weeks</td>
                                    <td>Python, Jupyter Notebook</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/neural_network.png'} alt='Neural network' />
                    </div>
                </div>
            </div>

            <div className='projectContent'>
                <div className='projectDescription'>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/handwritten_digits_sample.png'} alt='Handwritten digits sample' />
                        <p className='bold smallText'>Sample of images with handwritten numbers</p>
                    </div>
                    <div>
                        <h3 className='BLACKOUT'>description</h3>
                        <p className=''>
                            Classifying handwritten digits was part of the <Link className='blue' to='https://www.umu.se/utbildning/kurser/artificiell-intelligens---grunderna2/' target="_blank" rel="noopener noreferrer">Fundamentals of Artificial Intelligence</Link> course. The 
                            task was to, in two different ways, determine handwritten numbers on a large dataset of images, with at least 95% accuracy. 
                            The first approach consisted of implementing and training a <span className='green'>k-Nearest Neighbor model</span> (k-NN). The second approach was to perform a 
                            hyperparameter search to find the optimal number of neurons for a <span className='green'>Neural Network model</span> (ANN), and then training the model according 
                            to these values.
                        </p>
                        <br />
                        <h3 className='BLACKOUT'>results</h3>
                        <p className=''>
                            The results showed that the ANN model was better than the k-NN model at classifying the images, after it had been trained 
                            with optimal hyperparameters. Reaching the desired result however took a lot more time for the ANN than the k-NN.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HandwrittenDigits;