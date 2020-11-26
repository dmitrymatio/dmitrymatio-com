import { useRouter } from "next/router";
import Query from "../components/query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import PROJECT_QUERY from "../apollo/queries/project/project";

const Article = () => {
    const router = useRouter();
    return (
        <Query query={PROJECT_QUERY} id={router.query.id}>
            {({ data: { project } }) => {
                const imageUrl =
                    process.env.NODE_ENV !== "development"
                        ? project.image.url
                        : process.env.API_URL + project.image.url;
                return (
                    <div>
                        <div
                            id="banner"
                            className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                            data-src={imageUrl}
                            data-srcset={imageUrl}
                            data-uk-img
                        >
                            <h1>{project.title}</h1>
                        </div>

                        <div className="uk-section">
                            <div className="uk-container uk-container-small">
                                <ReactMarkdown source={project.content} />
                                <p>
                                    <Moment format="MMM Do YYYY">{project.published_at}</Moment>
                                </p>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Query>
    );
};

export default Article;