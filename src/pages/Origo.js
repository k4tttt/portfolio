import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ProjectSummary from '../components/ProjectSummary/ProjectSummary';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Title from '../components/Title/Title';

const Origo = () => {
	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
	}, []);

	return (
		<main className='projectPage'>
			<HelmetProvider>
				<Helmet>
					<title>Tyra Wodén | Marketing at Kårhuset Origo</title>
				</Helmet>
			</HelmetProvider>

			<div className='projectSummary'>
				<Breadcrumb forPage={'Marketing at Kårhuset Origo'} />
				
				<div className='projectSummaryContent'>
					<ProjectSummary
						title={'marketing at karhuset origo'}
						displayName={'marketing at kårhuset origo'}
						subtitle={'Kårhuset Origo is the student union house for Umeå Student Union of Science and Technology.'}
						tasks={'Graphic design, marketing strategy'}
						duration={'Ongoing since October 2023'}
						tools={'Figma, Canva'}
					/>
					<div>
						<img src={process.env.PUBLIC_URL + '/images/origo/origo_summary.png'} alt='Summary of Origo content' />
					</div>
				</div>
			</div>

			<div className='projectContent'>
				<div className='projectDescription'>
					<div className='descriptionImage'>
						<img src={process.env.PUBLIC_URL + '/images/origo/origo_weekly.png'} alt='Origo weekly posts' />
						<p className='bold smallText'>Weekly posts</p>
					</div>
					<div className='descriptionText'>
						<Title type='h3' title={'description'} />
						<p className=''>
							I am currently working as a team member in the PR group at <Link className="blue" to="https://www.instagram.com/karhusetorigo/" target="_blank" rel="noopener noreferrer">Kårhuset Origo</Link>.
							Two peers and I started the group in October 2023, in order to improve Kårhuset
							Origo's presence on social media. Since then, Origo's socials have gone from inconsistent
							and lacking of graphic personality, to regular and with a uniform graphic appearence.
						</p>
						<br />
						<Title type='h3' title={'results'} />
						<p className=''>
							The result of the PR group's work consists of weekly posts on Instagram and Facebook
							that inform Umeå's students about what will happen at Kårhuset Origo during the week.
							Posters and more elaborate graphic content is created for bigger events.
						</p>
					</div>
				</div>
				<div className='posters'>
					<p className='bold'>DJ posters for the Club X event (spring 2025)</p>
					<div className='posterContainer'>
						<img src={process.env.PUBLIC_URL + '/images/origo/axelerate_2025.png'} alt='Origo poster - Axelerate 2025' />
						<img src={process.env.PUBLIC_URL + '/images/origo/chr_2025.png'} alt='Origo poster - CHR 2025' />
						<img src={process.env.PUBLIC_URL + '/images/origo/chrillex_2025.png'} alt='Origo poster - Chrillex 2025' />
						<img src={process.env.PUBLIC_URL + '/images/origo/frtetude_2025.png'} alt='Origo poster - Frtetude 2025' />
						<img src={process.env.PUBLIC_URL + '/images/origo/dj_fribb_2025.png'} alt='Origo poster - DJ Fribb 2025' />
					</div>
				</div>
				{/* <div className='posters'>
					<p className='bold'>DJ posters for the Club X event (spring 2024)</p>
					<div className='posterContainer'>
						<img src={process.env.PUBLIC_URL + '/images/origo/dj_fribb_2024.png'} alt='Origo poster - DJ Fribb 2024' />
						<img src={process.env.PUBLIC_URL + '/images/origo/dj_larsson_2024.png'} alt='Origo poster - DJ Larsson 2024' />
						<img src={process.env.PUBLIC_URL + '/images/origo/frtetude_2024.png'} alt='Origo poster - Frtetude 2024' />
						<img src={process.env.PUBLIC_URL + '/images/origo/axelerate_2024.png'} alt='Origo poster - Axelerate 2024' />
						<img src={process.env.PUBLIC_URL + '/images/origo/dj_rippen_2024.png'} alt='Origo poster - DJ Rippen 2024' />
					</div>
				</div> */}
				<div className='posters'>
					<p className='bold'>Posters for events</p>
					<div className='posterContainer'>
						<img src={process.env.PUBLIC_URL + '/images/origo/discOrigo_poster.png'} alt='Origo poster - DiscOrigo 2023' />
						<img src={process.env.PUBLIC_URL + '/images/origo/clubxvt24_poster.png'} alt='Origo poster - Club X VT24' />
						{/* <img src={process.env.PUBLIC_URL + '/images/origo/origo_afterski.png'} alt='Origo poster - Afterski VT25' />
						<img src={process.env.PUBLIC_URL + '/images/origo/origo_fratparty.png'} alt='Origo poster - Valborg Fratparty 2025' /> */}
						<img src={process.env.PUBLIC_URL + '/images/origo/masterimassa_poster.png'} alt='Origo poster - Mästerimässa' />
						<img src={process.env.PUBLIC_URL + '/images/origo/discorigo_ht24.png'} alt='Origo poster - DiscOrigo 2024' />
						<img src={process.env.PUBLIC_URL + '/images/origo/clubxht23_poster.png'} alt='Origo poster - Club X HT23' />
					</div>
				</div>
			</div>
		</main>
	);
}

export default Origo;