const Project = ({ title, image, liveLink, githubLink }) => (
  <div>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <a href={liveLink}>Live</a> | <a href={githubLink}>GitHub</a>
  </div>
);

export default Project;