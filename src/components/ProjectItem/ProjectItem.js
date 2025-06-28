import { Link } from "react-router-dom";

const ProjectItem = ({ project }) => {

  return (
    <Link to={project.to} id={project.id} className='projectItem overlay'>
      <div>
        <ul className='projectTags'>
          {project.tags.map((tag, index) => (
            <li key={index} className='smallerText'>{tag}</li>
          ))}
        </ul>
        <p className='bold projectTitle'><span className='smallText'>{project.year}</span><br />{project.title}</p>
        <img src={process.env.PUBLIC_URL + project.image} alt={project.alt} />
      </div>
    </Link>
  );
}

export default ProjectItem;
