import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ProjectSummary from '../components/ProjectSummary/ProjectSummary';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Title from '../components/Title/Title';

const Tuneblr = () => {
	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
	}, []);

	return (
		<main className='projectPage'>
			<HelmetProvider>
				<Helmet>
					<title>Tyra Wodén | tuneblr</title>
				</Helmet>
			</HelmetProvider>

			<div className='projectSummary'>
				<Breadcrumb forPage={'tuneblr'} />

				<div className='projectSummaryContent'>
					<ProjectSummary
						title={'tuneblr'}
						subtitle={'A web application where users can create and share their own mixtapes.'}
						tasks={'Web development, databases, UX/UI design'}
						duration={'3 weeks, 50%'}
						tools={'.NET, C#, SQL, Visual Studio, Azure Data Studio, Docker'}
					/>
					<div>
						<img src={process.env.PUBLIC_URL + '/images/mixtape.png'} alt='tuneblr mixtape' />
					</div>
				</div>
			</div>

			<div className='projectContent'>
				<div className='projectDescription'>
					<div className='descriptionImage'>
						<img src={process.env.PUBLIC_URL + '/images/tuneblr_startpage.png'} alt='tuneblr start page' />
						<p className='bold smallText'>Start page</p>
					</div>
					<div className='descriptionText'>
						<Title type='h3' title={'description'} />
						<p className=''>
							The tuneblr website was created as part of the <Link className='blue' to='https://www.umu.se/utbildning/kurser/databasteknik-och-webbaserade-system/' target="_blank" rel="noopener noreferrer">Databases and Web Based Systems</Link> course. The
							task was to develop a web application connected to an underlying database, using the ASP.NET
							Core MVC framework and SQL database.
						</p>
						<br />
						<Title type='h3' title={'results'} />
						<p className=''>
							The result of the project is in form of a web app where users can register an account, and
							then create mixtapes that can be shared with other users. Mixtapes are shared via email
							through an SMTP server. Users can also browse among all mixtapes that exist in the database,
							and sort them by different tags such as “pop”, “electronic” or “swedish”. Login is handled via
							cookies, and passwords are encrypted before stored in the database.
						</p>
					</div>
				</div>
				<div>
					<div className='desktops'>
						<div>
							<img src={process.env.PUBLIC_URL + '/images/tuneblr_customize_profile.png'} alt='tuneblr customize profile' />
							<p className='bold smallText'>Customize your profile</p>
						</div>
						<div>
							<img src={process.env.PUBLIC_URL + '/images/tuneblr_profile.png'} alt='tuneblr profile' />
							<p className='bold smallText'>View user profiles</p>
						</div>
					</div>
					<div className='desktops'>
						<div>
							<img src={process.env.PUBLIC_URL + '/images/tuneblr_create_mixtape.png'} alt='tuneblr create mixtape' />
							<p className='bold smallText'>Create mixtapes</p>
						</div>
						<div>
							<img src={process.env.PUBLIC_URL + '/images/tuneblr_browse_mixtapes.png'} alt='tuneblr browse mixtapes' />
							<p className='bold smallText'>Browse mixtapes</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Tuneblr;