import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>Muhammad Moiz</h1>
        <h2>5th Semester IT Student at AIR University - React APP Project</h2>
      </header>

      <div className="container">
        <section className="about">
          <h3>About Me</h3>
          <p>
            Hi, I'm Muhammad Moiz, a 5th semester IT student from AIR
            University. I have a passion for technology, specializing in web
            development and data science. I love coding and am always eager to
            learn new skills.
          </p>
        </section>

        <section className="skills">
          <h3>Skills</h3>
          <div className="skills-list">
            <div className="skill">
              <h4>Web Development</h4>
              <p>
                Experienced in HTML, CSS, JavaScript, and responsive design.
              </p>
            </div>
            <div className="skill">
              <h4>Data Science</h4>
              <p>
                Proficient in data analysis, visualization, and machine learning
                techniques.
              </p>
            </div>
            <div className="skill">
              <h4>Python</h4>
              <p>
                Skilled in Python programming for automation and data
                processing.
              </p>
            </div>
          </div>
        </section>

        <section className="contact">
          <h3>Contact Me</h3>
          <p>
            Email:{" "}
            <a href="mailto:221073@students.au.edu.com">
              221073@students.au.edu.com
            </a>
          </p>
        </section>

        <section className="project-info">
          <h3>Project Info</h3>
          <p>This website is based on my portfolio project.</p>
        </section>
      </div>
    </div>
  );
}

export default App;
