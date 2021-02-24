import gql from "graphql-tag";

const PROJECT_QUERY = gql`
  query Projects($id: ID!) {
    project(id: $id) {
      id
      title
      content
      image {
        url
      }
      tags {
        id
        tag_name
      }
      published_at
    }
  }
`;

export default PROJECT_QUERY;