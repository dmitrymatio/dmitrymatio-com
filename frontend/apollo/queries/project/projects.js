import gql from "graphql-tag";

const PROJECTS_QUERY = gql`
  query Projects {
    projects {
      id
      title
      tags {
        id
        tag_name
      }
      github
      demo
      image {
        url
      }
    }
  }
`;

export default PROJECTS_QUERY;