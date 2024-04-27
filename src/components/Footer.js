import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

 const Footer = () => {
    return(
        <footer>
            <div>
                <Link className="BLACKOUT" to="/" style={{fontSize: "30px"}}>tyra woden</Link>
            </div>
            <div>
                <ul className="linkList">
                    <li><Link to="https://www.linkedin.com/in/tyra-wod%C3%A9n-3b036526b/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</Link></li>
                    <li><Link to="https://github.com/k4tttt" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} />GitHub</Link></li>
                    <li><Link to="mailto: tyra.woden@gmail.com"><FontAwesomeIcon icon={faEnvelope} />tyra.woden@gmail.com</Link></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;