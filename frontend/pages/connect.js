import React from "react";

const About = () => {
  return (
    <div>
      <div id="landing-intro" className="uk-section" >
        <div className="uk-container uk-container-large" style={{ height: "85%" }}>
          <div className="uk-card uk-card-body uk-flex" style={{ background: "#e5e5e5", height: "100%", padding: "0" }}>
            <div style={{ width: "40%", height: "100%", overflow: "hidden" }}>
              <img src="https://portfolio-images-strapi.s3.ca-central-1.amazonaws.com/pexels_negative_space_33999_3f53a66402.jpg" style={{ height: "100%", "object-position": "10% 50%", objectFit: "cover" }} />
            </div>
            <div style={{ width: "60%", padding: "50px" }}>
              <h1>Connect</h1>

              <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="contact-form" value="contact" />
                <div className="uk-margin">
                  <label>Your Name: <input className="uk-input" type="text" name="name" /></label>
                </div>
                <div className="uk-margin">
                  <label>Your Email: <input className="uk-input" type="email" name="email" /></label>
                </div>
                <div>
                  <label>Message: <textarea className="uk-textarea" rows="9" name="message"></textarea></label>
                </div>
                <div className="uk-flex uk-flex-between" style={{ marginTop: "25px" }}>
                  <button className="uk-button uk-button-large" style={{ background: "#ff2c55", color: "white", borderColor: "#ff2c55" }} type="submit">Send</button>
                  <ul className="uk-iconnav">
                    <li><a href="https://www.linkedin.com/in/dmitrymatio/" target="_blank" uk-icon="icon: linkedin; ratio: 2.5"></a></li>
                    <li><a href="https://github.com/dmitrymatio" target="_blank" uk-icon="icon: github-alt; ratio: 2.5"></a></li>
                  </ul>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;