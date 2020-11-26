import React from "react";
import Projects from "../components/projects";
import Query from "../components/query";
import PROJECTS_QUERY from "../apollo/queries/project/projects";
import Card from "../components/card";

const Home = () => {
  return (
    <div>
      <div id="landing-intro" className="uk-section">
        <div className="uk-flex uk-flex-center">
          <div className="uk-flex uk-flex-column uk-flex-middle" style={{ width: "800px" }}>
            <img src="./website-styleguide-logos_favicon.png" width="300" height="300" alt="logo" uk-img />
            <h1 style={{ color: "white" }}>Hi, I am <span style={{ color: "#ff2c55" }}>Dmitry</span></h1>
            <h2 style={{ color: "white" }}>I'm a Vancouver-based Web Developer focused on crafting tailored solutions</h2>
          </div>
        </div>
      </div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <div uk-filter="target: .js-filter">

            <ul class="uk-subnav uk-subnav-pill">
              <li class="uk-active" uk-filter-control><a href="">All</a></li>
              <li uk-filter-control="[data-color='development']"><a href="">Development</a></li>
              <li uk-filter-control="[data-color='ui-design']"><a href="">UI Design</a></li>
              <li uk-filter-control="[data-color='logo-brand']"><a href="">Logo and Branding</a></li>
            </ul>

            <ul class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" data-uk-grid>
              <Query query={PROJECTS_QUERY}>
                {({ data: { projects } }) => {
                  return (projects.map(project => {
                    console.log(project);
                    return <Card project={project} key={`article__${project.id}`} />;
                  })
                  );
                }}
              </Query>
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;