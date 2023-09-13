import { gql } from '@apollo/client';

// # create a GraphQL query to be executed by Apollo Client
export const QUERY_PUBLICEVENT = gql`
{
    publicEvents { 
      title
      description
      date
      price
      stock
      image
    }
  }
`;

export const QUERY_USERS = gql`
{
  user {
    username
    name
  }
}
`