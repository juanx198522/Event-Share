const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  imagen: {
    type: String,
    required: true,
  },
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
    default: Date.now,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  bookings: [{
    type: Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  }],
});

const Event = model('Event', eventSchema);

module.exports = Event;
