const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String!
    password: String!
    name: String!
    email: String!
    phone: String!
  }

  type MyEvent {
    title: String!
    description: String!
    date: String!
    price: Int!
    stock: Int!
    image: String!
    bookings:[User]
  }

  type PublicEvent {
    title: String!
    description: String!
    date: String!
    price: Int!
    stock: Int!
    image: String!
  }

  type Query {
    user: [User]
    myEvent: [MyEvent]
    publicEvents: [PublicEvent] 
    
  }

  type Mutation {
    createUser (
      username: String!,
      password: String!,
      name: String!,
      email: String!,
      phone: String!
    ): User

    createMyEvent(
      title: String!,
      description: String!,
      date: String!,
      price: Int!,
      stock: Int!,
      image: String!
    ): MyEvent

    updateMyEvent(
      id: ID!,
      title: String!,
      description: String!,
      date: String!,
      price: Int!,
      stock: Int!,
      image: String!
    ): MyEvent

    deleteMyEvent(
      id: ID!
    ): MyEvent

    createEventBooking(
      eventId: ID!
    ): PublicEvent

  }
`;

module.exports = typeDefs;