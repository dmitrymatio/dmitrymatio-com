import React from "react";
import { useState, useEffect } from 'react';

const About = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes('success=true')) {
      setSuccess(true);
    }
  }, []);


  return (
    <div>
      <div id="landing-intro" className="uk-section" style={{ "min-height": "1000px", "max-height": "100vh" }}>
        <div className="uk-container uk-container-large" style={{ height: "85%" }}>
          <div className="uk-card uk-card-body uk-flex" style={{ background: "#e5e5e5", height: "100%", padding: "0" }}>
            <div style={{ width: "40%", height: "100%", overflow: "hidden" }}>
              <img src="https://portfolio-images-strapi.s3.ca-central-1.amazonaws.com/pexels_negative_space_33999_3f53a66402.jpg" style={{ height: "100%", "object-position": "10% 50%", objectFit: "cover" }} />
            </div>
            <div style={{ width: "60%", padding: "50px" }}>
              <h1>Connect</h1>
              {success && (
                <p style={{ color: 'green' }}>
                  Successfully submitted form!
                </p>
              )}
              <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true" action="/connect?success=true">
                <input type="hidden" name="contact-form" value="contact" />
                <p style={{ visibility: "hidden", height: "0", width: "0" }}>
                  <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </p>
                <div className="uk-margin">
                  <label>Your Name: <input className="uk-input" type="text" name="name" /></label>
                </div>
                <div className="uk-margin">
                  <label>Your Email: <input className="uk-input" type="email" name="email" /></label>
                </div>
                <div>
                  <label>Message: <textarea className="uk-textarea" rows="6" name="message"></textarea></label>
                </div>
                <div data-netlify-recaptcha="true"></div>
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