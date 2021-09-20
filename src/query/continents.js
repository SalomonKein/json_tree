import {gql} from "@apollo/client";

export const GET_ALL_CONTINENT = gql`
  query {
    continents {
      name
      countries {
        name
        languages {
          name
        }
      }
    }
  }
`;
