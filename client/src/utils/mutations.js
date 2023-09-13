import { gql } from '@apollo/client';
export const ADD_EVENT = gql`
  mutation addEvent($title: String!, $description: String!, $date: String!, $price: Int!, $stock: Int!, $image: String!) {
    addEvent(title: $title, description: $description, date: $date, price: $price, stock: $stock, image: $image) {
      title
      description
      date
      price
      stock
      image
    }
  }
`;