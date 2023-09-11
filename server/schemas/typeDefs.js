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
    myEvents: [MyEvent]
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
    createMyEvents(
      title: String!,
      description: String!,
      date: String!,
      price: Int!,
      stock: Int!,
      image: String!
    ): MyEvent
    createEventBooking(
      eventId: ID!
    ): PublicEvent
  }
`;

module.exports = typeDefs;