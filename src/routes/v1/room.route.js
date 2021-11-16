const express = require('express');
const roomController = require('../../controllers/room.controller');

const router = express.Router();

router
  .route('/')
  .post(roomController.createRoom)
  .get(roomController.getRooms);

router
  .route('/:roomId')
  .get(roomController.getRoom)
  .patch(roomController.updateRoom)
  .delete(roomController.deleteRoom);

module.exports = router;