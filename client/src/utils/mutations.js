import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $name: String!, $phone: String!) {
    addUser(username: $username, email: $email, password: $password, name: $name, phone: $phone) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_MYEVENT = gql`
  mutation createMyEvent($title: String!, $description: String!, $date: String!, $price: Int!) {
    createMyEvent(title: $title, description: $description, date: $date, price: $price) {
      title
      description
      date
      price
    }
  }
`;

export const UPDATE_MYEVENT = gql`
  mutation updateMyEvent($id: ID!, $title: String!, $description: String!, $date: String!, $price: Int!) {
    updateMyEvent(id: $id, title: $title, description: $description, date: $date, price: $price) {
      title
      description
      date
      price
    }
  }
`;

export const DELETE_MYEVENT = gql`
  mutation deleteMyEvent($id: ID!) {
    deleteMyEvent(id: $id) {
      title
      description
      date
      price
    }
  }
`;

export const CREATE_EVENT_BOOKING = gql`
  mutation createEventBooking($eventId: ID!) {
    createEventBooking(eventId: $eventId) {
      title
      description
      date
      price
    }
  }
`;