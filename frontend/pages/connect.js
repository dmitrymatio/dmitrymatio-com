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
              <form name="contact" method="POST" data-netlify-recaptcha="true" netlify-honeypot="bot-field" data-netlify="true" action="/connect?success=true">
                <input type="hidden" name="form-name" value="contact" />
                <p style={{ visibility: "hidden", height: "0", width: "0" }}>
                  <label htmlFor="bot-field">Don’t fill this out if you're human: </label>
                  <input name="bot-field" />
                </p>
                <p className="uk-margin">
                  <label htmlFor="name">Your Name: </label>
                  <input className="uk-input" type="text" name="name" />
                </p>
                <p className="uk-margin">
                  <label htmlFor="email">Your Email: </label>
                  <input className="uk-input" type="email" name="email" />
                </p>
                <p>
                  <label htmlFor="message">Message: </label>
                  <textarea className="uk-textarea" rows="6" name="message" />
                </p>
                <div data-netlify-recaptcha="true"></div>
                <p className="uk-flex uk-flex-between" style={{ marginTop: "25px" }}>
                  <button className="uk-button uk-button-large" style={{ background: "#ff2c55", color: "white", borderColor: "#ff2c55" }} type="submit">Send</button>
                  <ul className="uk-iconnav">
                    <li><a href="https://www.linkedin.com/in/dmitrymatio/" target="_blank" uk-icon="icon: linkedin; ratio: 2.5"></a></li>
                    <li><a href="https://github.com/dmitrymatio" target="_blank" uk-icon="icon: github-alt; ratio: 2.5"></a></li>
                  </ul>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;