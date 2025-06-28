import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ProjectSummary from '../components/ProjectSummary/ProjectSummary';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

const Discogs = () => {
	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
	}, []);

	return (
		<main className='projectPage'>
			<HelmetProvider>
				<Helmet>
					<title>Tyra Wodén | Redesigning Discogs</title>
				</Helmet>
			</HelmetProvider>

			<div className='projectSummary'>
				<Breadcrumb forPage={'Discogs'} />

				<div className='projectSummaryContent'>
					<ProjectSummary
						title={'redesigning discogs'}
						subtitle={'Discogs is a website where users can buy and sell music. It also serves as a large music database.'}
						tasks={'Web development, UX/UI design'}
						duration={'2 months, 50%'}
						tools={'Figma, HTML, CSS, JavaScript, React'}
					/>
					<div>
						<img src={process.env.PUBLIC_URL + '/images/discogs_desktop_mobile.png'} alt='Discogs redesign' />
					</div>
				</div>
			</div>

			<div className='projectContent'>
				<div className='projectDescription'>
					<div className='descriptionImage'>
						<img src={process.env.PUBLIC_URL + '/images/discogs_artist.png'} alt='Discogs artist page' />
						<p className='bold smallText'>Redesigned artist page</p>
					</div>
					<div className='descriptionText'>
						<h3 className='BLACKOUT'>description</h3>
						<p className=''>
							Redesigning elements of the Discogs website was preformed a part of the <Link className='blue' to='https://www.umu.se/utbildning/kurser/webbteknik-for-ingenjorer/' target="_blank" rel="noopener noreferrer">Web Technology for Engineers</Link> course. The
							task was split into four parts: paper prototyping, developing using HTML and CSS, adding JavaScript to the website, and lastly, using the React framework
							to recreate the already developed website.
						</p>
						<br />
						<h3 className='BLACKOUT'>results</h3>
						<p className=''>
							The result consisted of a <span className='green'>responsive website</span> that contained three main pages. The first page displayed information about
							an artist and their discography. The second page displayed all albums for an artist. The third page displayed details
							such as tracklist, credits, and versions of a specific album.
						</p>
					</div>
				</div>
				<div className='desktops'>
					<div>
						<img src={process.env.PUBLIC_URL + '/images/discogs_albums.png'} alt='Discogs albums page' />
						<p className='bold smallText'>See all albums for the artist</p>
					</div>
					<div>
						<img src={process.env.PUBLIC_URL + '/images/discogs_album_detail.png'} alt='Discogs album detail page' />
						<p className='bold smallText'>View details about an album</p>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Discogs;