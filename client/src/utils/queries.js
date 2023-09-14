import { gql } from '@apollo/client';

export const QUERY_MYEVENT = gql`
  query myEvent {
    myEvent {
      title
      description
      date
      price
      stock
      image
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
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;