import { gql } from '@apollo/client';

// # create a GraphQL query to be executed by Apollo Client
export const QUERY_PUBLICEVENT = gql`
  query getPublicEvent {
    PublicEvent {
      title
      description
      date
      price
      stock
      image
    }
  }
`;