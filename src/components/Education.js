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
							I am currently studying my fourth year at the <Link onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="blue" to="https://www.umu.se/utbildning/program/civilingenjorsprogrammet-i-interaktion-och-design/" target="_blank" rel="noopener noreferrer">Master of Science Program in Interaction Technology and Design</Link> at Umeå University.
						</p>
						<p>
							The program makes me an expert in developing user-friendly, effective, and durable interfaces. A central part
							is putting focus on the end-user and their needs and desires. The courses I take give me great skills in
							web and software development, graphic design, and end-user testing.
						</p>
					</div>
				</div>
			</div>

		</div>
	);
}

export default Education;