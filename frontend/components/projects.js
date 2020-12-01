import React from "react";
import Card from "./card";

const Projects = ({ projects }) => {
    return (
        <ul class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-flex uk-list" uk-grid="masonry: true">
            {projects.map((project) => {
                return <Card project={project} key={`article__${project.id}`} />;
            })}
        </ul>
    );
};

export default Projects;