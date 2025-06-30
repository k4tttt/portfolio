import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ProjectSummary from '../components/ProjectSummary/ProjectSummary';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Title from '../components/Title/Title';

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
				<Breadcrumb forPage={'ELI'} />

				<div className='projectSummaryContent'>
					<ProjectSummary
						title={'eli'}
						subtitle={'ELI is a mobile and desktop application that meets the needs of electric vehicle owners.'}
						tasks={'UX/UI design'}
						duration={'4 weeks, 100%'}
						tools={'Figma, interviews'}
					/>
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
						<Title type='h3' title={'description'} />
						<p className=''>
							The ELI project was carried out as part of the <Link className='blue' to='https://www.umu.se/utbildning/kurser/design-for-anvandarupplevelse3/' target="_blank" rel="noopener noreferrer">Design for user experience</Link> course. The
							task was to design a versatile application that meets the needs of electric vehicle owners. To solve the task at hand, interviews were
							performed to gather information about the target group. A thorough use-case scenario was created,
							and prototyping on paper and in Figma was performed accordingly.
						</p>
						<br />
						<Title type='h3' title={'results'} />
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