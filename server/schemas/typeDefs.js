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
    _id: ID
    title: String!
    description: String!
    date: String!
    price: Int!
    rsvps:[User]
  }

  type PublicEvent {
    _id: ID
    title: String!
    description: String!
    date: String!
    price: Int!
  }

  type Auth{
    token: ID!
    user: User
  }
  
  type Booking {
    _id: ID
    event: PublicEvent
    createdAt: String
    updatedAt: String
  }

  type Query {
    user: [User]
    myEvent: [MyEvent]
    publicEvents: [PublicEvent] 
    userBookings: [Booking]
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
    ): MyEvent

    updateMyEvent(
      id: ID!,
      title: String!,
      description: String!,
      date: String!,
      price: Int!,
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