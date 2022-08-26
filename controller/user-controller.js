const userModel = require('../schema/user-schema');

const addUserController = async (req, res) => {
  const user = req.body;
  const validUser = new userModel(user);

  try {
    await validUser.save();
    res.status(201).json(validUser);
  } catch (error) {
    res.status(201).json(error.message);
  }
};

const getUserController = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const getUserByID = async (req, res) => {
  try {
    const users = await userModel.findById(req.params.id);
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const editUser = async (req, res) => {
  let user = req.body;

  const editUser = new userModel(user);

  try {
    await userModel.updateOne({ _id : req.params.id }, editUser);
    res.status(201).json(editUser);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    await userModel.deleteOne({ _id : req.params.id });
    res.status(201).json(editUser);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

module.exports = {
  addUserController,
  getUserController,
  getUserByID,
  editUser,
  deleteUser,
};
