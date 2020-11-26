import React from "react";
import Link from "next/link";

const Card = ({ project }) => {
    const imageUrl =
        process.env.NODE_ENV !== "development"
            ? project.image.url
            : process.env.API_URL + project.image.url;
    return (
        <Link href={{ pathname: "project", query: { id: project.id } }}>
            <a className="uk-link-reset">
                <div className="uk-card uk-card-muted">
                    <div className="uk-card-media-top">
                        <img
                            src={imageUrl}
                            alt={project.image.url}
                            height="100"
                        />
                    </div>
                    <div className="uk-card-body">
                        <p id="category" className="uk-text-uppercase">
                            {project.tags.tag_name}
                        </p>
                        <p id="title" className="uk-text-large">
                            {project.title}
                        </p>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default Card;