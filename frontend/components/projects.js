import React from "react";
import Card from "./card";

const Projects = ({ projects }) => {
    const leftArticlesCount = Math.ceil(projects.length / 5);
    const leftArticles = projects.slice(0, leftArticlesCount);
    const rightArticles = projects.slice(leftArticlesCount, projects.length);

    return (
        <div>
            <div className="uk-child-width-1-2" data-uk-grid>
                <div>
                    {leftArticles.map((project, i) => {
                        return <Card project={project} key={`article__${project.id}`} />;
                    })}
                </div>
                <div>
                    <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
                        {rightArticles.map((project, i) => {
                            return <Card project={project} key={`article__${project.id}`} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;