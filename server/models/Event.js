const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  eventOwner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  }, 
  bookings: [{
    type: Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  }],
});

const Event = model('Event', eventSchema);

module.exports = Event;
