import EmptyProjectItem from './EmptyProjectItem/EmptyProjectItem';
import projects from '../data/projects.json'
import ProjectItem from "./ProjectItem/ProjectItem";
import Title from './Title/Title';

const Projects = () => {

  return (
    <div id='projects'>
      <Title title={'projects'} type={'h2'} />
      {/* <h2 className='BLACKOUT'>projects</h2> */}
      <p className='smallText'>Here are some projects that I have worked on.</p>
      <div id='projectContainer'>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}

        <EmptyProjectItem id={'empty-2'} />

        <EmptyProjectItem id={'empty-4'} />

        <EmptyProjectItem id={'empty-7'} />
      </div>
    </div>
  );
}

export default Projects;
