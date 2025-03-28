const Project = ({ title, image, liveLink, githubLink }) => (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <div className="project-links">
        <a href={liveLink} target="_blank" rel="noreferrer">Live Site</a>
        <a href={githubLink} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  );
  
  export default Project;
  