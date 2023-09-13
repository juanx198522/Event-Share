const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Event } = require('../models');

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    myEvent: async (parent, { _id }) => {
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

    createMyEvent: async (parent, args) => {
      const myEvent = await Event.create(args);
      return myEvent;
    },

    updateMyEvent: async (parent, { id, title, description, date, price, stock, image }) => {
      try {
        const updatedEvent = await Event.findByIdAndUpdate(
          id,
          {
            title,
            description,
            date,
            price,
            stock,
            image,
          },
          { new: true }
        );
        return updatedEvent;
      } catch (error) {
        throw new Error('Error updating event');
      }
    },

    deleteMyEvent: async (parent, { id }) => {
      try {
        const deletedEvent = await Event.findByIdAndDelete(id);
        return deletedEvent;
      } catch (error) {
        throw new Error('Error deleting event');
      }
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
