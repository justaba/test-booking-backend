const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const roomSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    photo: {
      type: String,
      required: true,
      trim: true
    },
    countRoom: {
      type: Number,
      required: true,
      trim: true
    },
    price: {
      type: Number,
      required: true,
      trim: true
    },
    booked: {
      type: Boolean,
      default: false
    }
  }
);

roomSchema.plugin(toJSON);
roomSchema.plugin(paginate);

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;