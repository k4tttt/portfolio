import React from 'react';
import { Link } from "react-router-dom";

export default function Education() {
    return (
        <div id='education'>
            <h2 className='BLACKOUT'>education</h2>
            <div style={{width: "50vw"}}>
                <p>
                    I am currently studying my third year at the <Link className="green" to="https://www.umu.se/utbildning/program/civilingenjorsprogrammet-i-interaktion-och-design/" target="_blank" rel="noopener noreferrer">Master of Science Program in Interaction Technology and Design</Link> at Umeå University.
                </p>
                <p>
                    The program teaches me akfak
                </p>
            </div>
            
        </div>
    );
}