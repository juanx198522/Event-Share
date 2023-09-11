import { gql } from '@apollo/client';

export const QUERY_PUBLICEVENT = gql`
  # create a GraphQL query to be executed by Apollo Client
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