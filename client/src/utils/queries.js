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

export const GET_USER_BOOKINGS = gql`
  query {
    userBookings {
      _id
      event {
        title
        description
        date
        price
      }
      createdAt
      updatedAt
    }
  }
`;
