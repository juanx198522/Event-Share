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
  mutation createMyEvent(
    $title: String!
    $description: String!
    $date: String!
    $price: Int!
    $stock: Int!
    $image: String!
  ) {
    createMyEvent(
      title: $title
      description: $description
      date: $date
      price: $price
      stock: $stock
      image: $image
    ) {
      title
      description
      date
      price
      stock
      image
    }
  }
`;

export const UPDATE_MYEVENT = gql`
  mutation updateMyEvent(
    $id: ID!
    $title: String!
    $description: String!
    $date: String!
    $price: Int!
    $stock: Int!
    $image: String!
  ) {
    updateMyEvent(
      id: $id
      title: $title
      description: $description
      date: $date
      price: $price
      stock: $stock
      image: $image
    ) {
      title
      description
      date
      price
      stock
      image
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
      stock
      image
    }
  }
`;
