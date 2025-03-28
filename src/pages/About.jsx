import profile from "../assets/me.jpg";

const About = () => {
  return (
    <section>
      <h2>About Me</h2>
      <div className="about-container">
        <img src={profile} alt="Simranjot Singh" className="profile-pic" />
        <p>
          Hi! I’m <strong>Simranjot Singh</strong>, but you can call me Simran. I’m a web developer focused on building fast, responsive, and modern websites using React and JavaScript. I’m currently studying Computer Science and constantly improving my skills through projects, challenges, and real-world coding.
        </p>
        <p>
          I’ve built everything from personal blogs to full portfolio websites (like this one!), and I’m currently diving deeper into full-stack development. My goal is to become a well-rounded developer who can take any idea from concept to completion.
        </p>
        <p>
          Outside of coding, I’m into cars, racing sims, and leveling up my setup one part at a time. I’m also into anime, clean UI design, and helping others learn what I’ve learned.
        </p>
        <p>
          If you’re a developer, a recruiter, or someone who just stumbled across this page — thanks for visiting! Feel free to check out my projects, download my resume, or hit me up using the contact form.
        </p>
      </div>
    </section>
  );
};

export default About;
