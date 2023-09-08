const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String!
    password: String!
    name: String!
    email: String!
    phone: Int!
  }

  type MyEvent {
    title: String!
    description: String!
    date: Date!
    price: Int!
    stock: Int!
    image: String!
    bookings:[User]
  }

  type PublicEvent {
    title: String!
    description: String!
    date: Date!
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
      phone: Int!
    )
    createEvent(
      title: String!,
      description: String!,
      date: Date!,
      price: Int!,
      stock: Int!,
      image: String!,
    )
    createEventBooking(
      eventId: ID!
    )
  }
`;

module.exports = typeDefs;
