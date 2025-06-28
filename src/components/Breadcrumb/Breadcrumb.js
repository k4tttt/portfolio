import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Breadcrumb = ({ forPage }) => {

  return (
    <div>
      <Link to='/' className='smallerText' style={{ marginRight: '8px' }}>Tyra Wodén</Link>
      <FontAwesomeIcon icon={faAngleRight} className='smallerText'></FontAwesomeIcon>
      <Link to={{}} className='smallerText'>{forPage}</Link>
    </div>
  );
}

export default Breadcrumb;