import { gql } from '@apollo/client';

export const CREATE_MYEVENT = gql`
  mutation createMyEvent($title: String!, $description: String!, $date: String!, $price: Int!, $stock: Int!, $image: String!) {
    createMyEvent(title: $title, description: $description, date: $date, price: $price, stock: $stock, image: $image) {
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
  mutation updateMyEvent($id: ID!, $title: String!, $description: String!, $date: String!, $price: Int!, $stock: Int!, $image: String!) {
    updateMyEvent(id: $id, title: $title, description: $description, date: $date, price: $price, stock: $stock, image: $image) {
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

export const ADD_USER = gql`
  mutation addUser($username: String!,$email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user{
        _id
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      profile{
        _id
        name
      }
    }
  }
`;