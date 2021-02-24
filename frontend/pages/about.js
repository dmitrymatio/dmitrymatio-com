import React from "react";

const About = () => {
  return (
    <div>
      <div id="landing-intro" className="uk-section" style={{ "min-height": "1000px", "max-height": "100vh" }}>
        <div className="uk-container uk-container-large" style={{ height: "90%" }}>
          <div class="uk-card uk-card-body uk-flex" style={{ background: "#e5e5e5", height: "100%", padding: "0" }}>
            <div style={{ width: "70%", padding: "50px" }}>
              <h1 style={{"font-size": "3rem"}}>About Me</h1>
              <h3 style={{"font-size": "1.5rem"}}>I'm a Software Developer focused on Web Technology.<br />Graduate of <a href="https://www.bcit.ca/programs/full-stack-web-development-diploma-full-time-7540dipma/">BCIT</a></h3>
              <p style={{"font-size": "1rem"}}>I’m passionate about technology - not a specific framework or language.
              In this line of work it's about adaptation, and what works best for the project.
              I’m open to learning any stack and I enjoy tailoring elegant solutions to complex problems.
              My motto as a developer is if I am the smartest person in the room, I am in the wrong room.
              </p>
              <table class="uk-table uk-table-responsive">
                <caption><h3 style={{"font-size": "1.5rem"}}>Technologies</h3></caption>
                <thead>
                  <tr>
                    <th style={{"font-size": "1.5rem"}}>Front End</th>
                    <th style={{"font-size": "1.5rem"}}>Back End</th>
                    <th style={{"font-size": "1.5rem"}}>Other</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{"font-size": "1rem"}}>React | Next | Redux</td>
                    <td style={{"font-size": "1rem"}}>C# | ASP.NET</td>
                    <td style={{"font-size": "1rem"}}>AWS | Heroku | Netlify | Vercel</td>
                  </tr>
                  <tr>
                    <td style={{"font-size": "1rem"}}>HTML | CSS | JavaScript</td>
                    <td style={{"font-size": "1rem"}}>Node | Express</td>
                    <td style={{"font-size": "1rem"}}>Docker | Vagrant</td>
                  </tr>
                  <tr>
                    <td style={{"font-size": "1rem"}}>Apollo | GraphQL | Axios | REST</td>
                    <td style={{"font-size": "1rem"}}>MongoDB | PostgreSQL</td>
                    <td style={{"font-size": "1rem"}}>Design | Business | 3D Modeling</td>
                  </tr>
                </tbody>
              </table>
              <div className="uk-flex uk-flex-between" style={{ marginTop: "25px" }}>
                <button className="uk-button uk-button-large" style={{ background: "#ff2c55", color: "white", borderColor: "#ff2c55" }} type="submit">Hire Me</button>
                <ul className="uk-iconnav">
                  <li><a href="https://www.linkedin.com/in/dmitrymatio/" target="_blank" uk-icon="icon: linkedin; ratio: 2.5"></a></li>
                  <li><a href="https://github.com/dmitrymatio" target="_blank" uk-icon="icon: github-alt; ratio: 2.5"></a></li>
                </ul>
              </div>
            </div>
            <div style={{ width: "40%", height: "100%", overflow: "hidden" }}>
              <img src="https://portfolio-images-strapi.s3.ca-central-1.amazonaws.com/profile_photo_1d4aa3076d.jpg" style={{ height: "100%", "object-position": "70% 50%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;