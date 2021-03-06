import React from "react";
import Projects from "../components/projects";
import Query from "../components/query";
import PROJECTS_QUERY from "../apollo/queries/project/projects";
import Card from "../components/card";

const Home = () => {
  return (
    <div>
      <div id="landing-intro" className="uk-section" style={{ "min-height": "1000px", "max-height": "100vh" }} >
        <div className="uk-flex uk-flex-center">
          <div className="uk-flex uk-flex-column uk-flex-middle" style={{ width: "725px" }}>
            <img src="./favicon.png" alt="logo" uk-img style={{ "max-width": "300px", "max-height": "300px" }} />
            <h1 style={{ color: "white", "font-size": "3rem" }}>Hi, I am <span style={{ color: "#ff2c55" }}>Dmitry</span></h1>
            <h2 style={{ color: "white", "font-size": "2rem" }}>I'm a Full-Stack Web Developer currently looking for <span style={{ color: "#ff9e00" }}>Remote</span> and Vancouver based opportunities</h2>
            <a class="uk-button uk-button-large" style={{ background: "#ff2c55", color: "white", borderColor: "#ff2c55" }} href="/connect">Hire me</a>
          </div>
        </div>
      </div>

      <div className="uk-section" style={{ height: "auto" }}>
        <div className="uk-container uk-container-large">
          <div uk-filter="target: .js-filter">

            <ul className="uk-subnav uk-subnav-pill">
              <li className="uk-active" uk-filter-control="[data-tag]"><a href="/">All</a></li>
              <li uk-filter-control="[data-tag='development']"><a href="/">Development</a></li>
              <li uk-filter-control="[data-tag='ui-design']"><a href="/">UI Design</a></li>
              <li uk-filter-control="[data-tag='logo-brand']"><a href="/">Logo and Branding</a></li>
            </ul>

            <Query query={PROJECTS_QUERY}>
              {({ data: { projects } }) => {
                return <Projects projects={projects.reverse()} />;
              }}
            </Query>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;