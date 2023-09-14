const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
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
    rsvps:[User]
  }

  type PublicEvent {
    title: String!
    description: String!
    date: String!
    price: Int!
    stock: Int!
    image: String!
  }

  type Auth{
    token: ID!
    user: User
  }

  type Query {
    user: [User]
    myEvent: [MyEvent]
    publicEvents: [PublicEvent] 
    
  }

  type Mutation {
    addUser (
      username: String!,
      password: String!,
      name: String!,
      email: String!,
      phone: String!
    ): Auth

    login(
      email: String!,
       password: String!
       ): Auth

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