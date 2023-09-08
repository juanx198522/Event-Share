const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Event } = require('../models');

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    myEvents: async (parent, { _id }) => {
      return Event.find( {eventOwner: _id}).populate('bookings');
    },
    publicEvents: async () => {
      return Event.find({});
    }
  },

  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user} ;
    },

    createMyEvents: async (parent, args) => {
      const myEvents = await Event.create(args);
      return myEvents;
    },
    createEventBooking: async (parent, args, context) => {
      const booking = await Event.findByIdAndUpdate(
        args.eventId,
        { $push: {bookings:context.user.id}}

      )
      return booking;
    },
  },
};

module.exports = resolvers;
