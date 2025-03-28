import Project from "../components/Project";
import project1 from "../assets/project1.png"; 
import project2 from "../assets/project2.png";


const projects = [
  {
    title: "Project One",
    image: project1,
    liveLink: "https://ajaxtheroo.github.io/dnd-monster-search/",
    githubLink: "https://github.com/AjaxTheRoo/dnd-monster-search.git"
  },
  {
    title: "Project Two",
    image: project2,
    liveLink: "postgresql://journal_app_db_c496_user:CGBh2pZUfWIZuku5abLeiI18tVDrTxeO@dpg-cu4rmq5ds78s73ds0nm0-a.oregon-postgres.render.com/journal_app_db_c496",
    githubLink: "https://github.com/Mykull06/projectSoulSync.git"
  },
  {
    title: "Project Three",
    image: project1,
    liveLink: "https://example.com/project-three",
    githubLink: "https://github.com/yourusername/project-three"
  },
  {
    title: "Project Four",
    image: project1,
    liveLink: "https://example.com/project-four",
    githubLink: "https://github.com/yourusername/project-four"
  },
  {
    title: "Project Five",
    image: project1,
    liveLink: "https://example.com/project-five",
    githubLink: "https://github.com/yourusername/project-five"
  },
  {
    title: "Project Six",
    image: project1,
    liveLink: "https://example.com/project-six",
    githubLink: "https://github.com/yourusername/project-six"
  }
];

const Portfolio = () => {
  return (
    <section>
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
