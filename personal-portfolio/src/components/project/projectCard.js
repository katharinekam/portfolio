import './projectCard.scss'


const ProjectCard = (props) => {
    const { projectName, projectDetails, projectImage } = props;
    return (
      <div className="project-card">
        <div className="card-wrapper">
          <img className="card-image" src={projectImage} alt="" />
          <div className="card-content">
            <h5>{projectName}</h5>
            <p>{projectDetails}</p>
          </div>
        </div>
      </div>
    );
}

export default ProjectCard;