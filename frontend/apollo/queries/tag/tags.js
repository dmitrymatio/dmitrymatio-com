import gql from "graphql-tag";

const TAGS_QUERY = gql`
  query Categories {
    tags {
      id
      tag_name
    }
  }
`;

export default TAGS_QUERY;