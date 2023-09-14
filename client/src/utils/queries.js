import { gql } from '@apollo/client';

export const QUERY_MYEVENT = gql`
  query myEvent {
    myEvent {
      title
      description
      date
      price
    }
  }
`;

export const QUERY_PUBLICEVENT = gql`
{
    publicEvents { 
      title
      description
      date
      price
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