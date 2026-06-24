import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Title from './Title/Title';

const Education = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div id='education'>
			<div className='section-content'>
				<div className='imageDiv'>
					<img className={`hiddenImage ${isHovered ? 'visible' : ''}`} src={process.env.PUBLIC_URL + '/images/id_hemsida.png'} alt='Interaktion och design - UmU' />
					<img className='topImage' src={process.env.PUBLIC_URL + '/images/computer_and_books.png'} alt='Computer and books' />
				</div>
				<div>
					<Title title={'education'} type={'h2'} />
					{/* <h2 className='BLACKOUT'>education</h2> */}
					<div>
						<p>
							I have a <Link onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="blue" to="https://www.umu.se/utbildning/program/civilingenjorsprogrammet-i-interaktion-och-design/" target="_blank" rel="noopener noreferrer">Master of Science in Interaction Technology and Design</Link> degree from Umeå University. 
							The program formed me into an expert in developing user-friendly, efficient, and durable interfaces and applications. 
							Many courses center around software engineering, user-centered design, and web development.
						</p>
						<p>
							Additionally, I have a Bachelor's degree in Computing Science. During my studies, I focused on CS topics such as  
							artificial intelligence, databases, and low-level programming, which has elevated my skills as a developer.  
						</p>
						<p>
							My MSc thesis explored an explainable AI approach to energy forecasting. Read the full thesis on <Link className='blue' to='http://urn.kb.se/resolve?urn=urn:nbn:se:umu:diva-254616' target='_blank' rel='noopener noreferrer'>DiVA</Link>.
						</p>
					</div>
				</div>
			</div>

		</div>
	);
}

export default Education;