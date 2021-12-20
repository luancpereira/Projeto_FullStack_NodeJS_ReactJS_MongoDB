const TaskModel = require("../model/TaskModel");

const TaskValidation = async (req, res, next) => {
  const { macaddress, type, title, description, when } = req.body;
};

module.exports = TaskValidation;
