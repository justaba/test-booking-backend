const httpStatus = require('http-status');
const { Booking } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a booking
 * @param {Object} bookingBody
 * @returns {Promise<User>}
 */
 const createBooking = async (bookingBody) => {
  return Booking.create(bookingBody);
};

module.exports = {
  createBooking
}