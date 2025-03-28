const Resume = () => {
    return (
      <section>
        <h2>Resume</h2>
  
        {/* Download Link */}
        <p>
          Download my{" "}
          <a href="/resume.pdf" download>
            resume (PDF)
          </a>
        </p>
  
        {/* Skills List */}
        <h3>Proficiencies</h3>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML5 & CSS3</li>
          <li>RESTful APIs</li>
          <li>MongoDB & Mongoose</li>
          <li>MySQL & Sequelize</li>
          <li>Git & GitHub</li>
          <li>Vite + React Router</li>
          <li>Deployment (Netlify, Vercel)</li>
        </ul>
      </section>
    );
  };
  
  export default Resume;
  