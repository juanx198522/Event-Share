const { Schema, model } = require('mongoose');

const bookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    
    required: true,
  },
  event: {
    type: Schema.Types.ObjectId,
   
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Booking = model('Booking', bookingSchema);

module.exports = Booking;
