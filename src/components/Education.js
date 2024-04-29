import React from 'react';
import { Link } from "react-router-dom";

 const Education = () => {
    return (
        <div id='education'>
            <h2 className='BLACKOUT'>education</h2>
            <div style={{width: "50vw"}}>
                <p>
                    I am currently studying my third year at the <Link className="green" to="https://www.umu.se/utbildning/program/civilingenjorsprogrammet-i-interaktion-och-design/" target="_blank" rel="noopener noreferrer">Master of Science Program in Interaction Technology and Design</Link> at Umeå University.
                </p>
                <p>
                    The program makes me an expert in developing user-friendly, effective, and durable user interfaces. This includes giving me great skills in web development, graphic design, end-user testing, and software development.
                </p>
                <p>
                    more text probably. i should add more
                </p>
            </div>
            
        </div>
    );
}

export default Education;