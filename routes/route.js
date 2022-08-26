const express = require('express');
const {
  addUserController,
  getUserController,
  getUserByID,
  editUser,
  deleteUser,
} = require('../controller/user-controller');
const router = express.Router();

router.get('/all', getUserController);
router.post('/add', addUserController);
router.get('/:id', getUserByID);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

module.exports = router;
