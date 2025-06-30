import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ProjectSummary from '../components/ProjectSummary/ProjectSummary';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Title from '../components/Title/Title';

const IdagInatt = () => {
	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
	}, []);

	return (
		<main className='projectPage'>
			<HelmetProvider>
				<Helmet>
					<title>Tyra Wodén | IDag&Inatt</title>
				</Helmet>
			</HelmetProvider>

			<div className='projectSummary'>
				<Breadcrumb forPage={'IDag&Inatt'} />

				<div className='projectSummaryContent'>
					<ProjectSummary
						title={'idag&inatt'}
						subtitle={'IDag&Inatt is a yearly labor market day for students at the M.Sc. program in Interaction Technology and Design.'}
						tasks={'Graphic design, marketing, web development'}
						duration={'8 months'}
						tools={'Figma, HTML, CSS'}
					/>
					<div>
						<img src={process.env.PUBLIC_URL + '/images/idaginatt_sample.png'} alt='IDag&Inatt 2023 samples' />
					</div>
				</div>
			</div>

			<div className='projectContent'>
				<div className='projectDescription'>
					<div className='descriptionImage'>
						<p className='bold'>Website landing page</p>
						<img src={process.env.PUBLIC_URL + '/images/idaginatt_desktop.png'} alt='IDag&Inatt 2023 desktop' />
					</div>
					<div className='descriptionText'>
						<Title type='h3' title={'description'} />
						<p className=''>
							I was part of the PR team for the 2023 edition of IDag&Inatt. The task was to
							create marketing content and a graphic profile based on the theme 80's arcade, in
							order to inform students at the M.Sc. program in Interaction Technology and Design about the event.
						</p>
						<br />
						<Title type='h3' title={'results'} />
						<p className=''>
							The result consisted of a website with custom graphic elements,
							containing all information about the event. A
							series of Instagram posts were made to further promote the event. Graphic content used
							during the event itself was also created.
						</p>
					</div>
				</div>
				<div className='instagramPosts'>
					<p className='bold'>Instagram posts for event sponsors</p>
					<div className='posterContainer'>
						<img src={process.env.PUBLIC_URL + '/images/guldsponsor1.png'} alt='Instagram - Guldsponsor 1' />
						<img src={process.env.PUBLIC_URL + '/images/guldsponsor2.png'} alt='Instagram - Guldsponsor 2' />
						<img src={process.env.PUBLIC_URL + '/images/guldsponsor3.png'} alt='Instagram - Guldsponsor 3' />
						<img src={process.env.PUBLIC_URL + '/images/silversponsor.png'} alt='Instagram - Silversponsor' />
					</div>
				</div>
				<div className='pacmantetris'>
					<p className='bold'>Some graphic elements on the website</p>
					<div className='posterContainer'>
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