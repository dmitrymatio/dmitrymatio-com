import React from "react";
import Link from "next/link";

const Card = ({ project }) => {
    return (
        <li data-tag={project.tags[0].tag_name}>
            <div className="uk-card uk-card-default" >
                <div className="uk-card-media-top">
                    <img
                        src={project.image.url}
                        alt={project.image.alternative}
                        style={{ objectFit: "cover" }}
                    />
                </div>

                <div class="uk-card-body">
                    <h3>{project.title}</h3>
                    <div>
                        <a class="uk-button uk-button-default" href={project.demo} target="_blank">Demo</a>
                        <a class="uk-button uk-button-default" href={project.github} target="_blank">Github</a>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Card;