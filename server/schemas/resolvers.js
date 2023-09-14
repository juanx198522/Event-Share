const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Event } = require('../models');

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.find();
    },
    myEvent: async (parent, { _id }) => {
      return Event.find( {eventOwner: _id}).populate('rsvps');
    },
    publicEvents: async () => {
      return Event.find({});
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password, phone, name }) => {
      const user = await User.create({ username, email, password, phone, name });
      const token = signToken(user);
      return { token, user} ;
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    createMyEvent: async (parent, args) => {
      const myEvent = await Event.create({...args, rsvps: []});
      return myEvent;
    },

    updateMyEvent: async (parent, { id, title, description, date, price}) => {
      try {
        const updatedEvent = await Event.findByIdAndUpdate(
          id,
          {
            title,
            description,
            date,
            price,
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
        { $push: {rsvps:context.user.id}}

      )
      return booking;
    },
  },
};

module.exports = resolvers;
