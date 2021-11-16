const httpStatus = require('http-status');
const { Room } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
 const createRoom = async (userBody) => {
  return Room.create(userBody);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryRooms = async (filter, options) => {
  const rooms = await Room.paginate(filter, options);
  return rooms;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getRoomById = async (id) => {
  return Room.findById(id);
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getRoomByEmail = async (email) => {
  return Room.findOne({ email });
};

/**
 * Update user by id
 * @param {ObjectId} roomId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateRoomById = async (roomId, updateBody) => {
  const room = await getRoomById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(user, updateBody);
  await room.save();
  return room;
};

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteRoomById = async (roomId) => {
  const room = await getRoomById(roomId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await room.remove();
  return room;
};

module.exports = {
  createRoom,
  queryRooms,
  getRoomById,
  getRoomByEmail,
  updateRoomById,
  deleteRoomById,
};
