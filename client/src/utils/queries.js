import { gql } from '@apollo/client';

export const QUERY_MYEVENT = gql`
  query myEvent {
    myEvent {
      _id
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
      _id
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
