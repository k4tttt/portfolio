import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ProjectSummary from '../components/ProjectSummary/ProjectSummary';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Title from '../components/Title/Title';

const HandwrittenDigits = () => {
	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
	}, []);

	return (
		<main className='projectPage'>
			<HelmetProvider>
				<Helmet>
					<title>Tyra Wodén | Handwritten Digits</title>
				</Helmet>
			</HelmetProvider>

			<div className='projectSummary'>
				<Breadcrumb forPage={'Handwritten Digits'} />

				<div className='projectSummaryContent'>
					<ProjectSummary
						title={'handwritten digits'}
						subtitle={'Classifying handwritten digits by utilizing machine learning.'}
						tasks={'AI, Machine learning, k-NN, ANN'}
						duration={'2 weeks, 50%'}
						tools={'Python, Jupyter Notebook'}
					/>
					<div>
						<img src={process.env.PUBLIC_URL + '/images/neural_network.png'} alt='Neural network' />
					</div>
				</div>
			</div>

			<div className='projectContent'>
				<div className='projectDescription'>
					<div className='descriptionImage'>
						<img src={process.env.PUBLIC_URL + '/images/handwritten_digits_sample.png'} alt='Handwritten digits sample' />
						<p className='bold smallText'>Sample of images with handwritten numbers</p>
					</div>
					<div className='descriptionText'>
						<Title type='h3' title={'description'} />
						<p className=''>
							Classifying handwritten digits was part of the <Link className='blue' to='https://www.umu.se/utbildning/kurser/artificiell-intelligens---grunderna2/' target="_blank" rel="noopener noreferrer">Fundamentals of Artificial Intelligence</Link> course. The
							task was to, in two different ways, determine handwritten numbers on a large dataset of images, with at least 95% accuracy.
							The first approach consisted of implementing and training a k-Nearest Neighbor model (k-NN). The second approach was to perform a
							hyperparameter search to find the optimal number of neurons for a Neural Network model (ANN), and then train the model according
							to these values.
						</p>
						<br />
						<Title type='h3' title={'results'} />
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