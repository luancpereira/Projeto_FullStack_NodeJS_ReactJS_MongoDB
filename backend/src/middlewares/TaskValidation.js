const TaskModel = require("../model/TaskModel");
const { isPast } = require("date-fns");

const TaskValidation = async (req, res, next) => {
  const { macaddress, type, title, description, when } = req.body;

  if (!macaddress) {
    return res.status(400).json({ error: "Macaddress é obrigatorio!" });
  } else if (!type) {
    return res.status(400).json({ error: "Tipo é obrigatorio!" });
  } else if (!title) {
    return res.status(400).json({ error: "Titulo é obrigatorio!" });
  } else if (!description) {
    return res.status(400).json({ error: "Descrição é obrigatorio!" });
  } else if (!when) {
    return res.status(400).json({ error: "Data e Hora é obrigatorio!" });
  } else {
    let exists;

    if (req.params.id) {
      exists = await TaskModel.findOne({
        _id: { $ne: req.params.id },
        when: { $eq: new Date(when) },
        macaddress: { $in: macaddress },
      });
    } else {
      if (isPast(new Date(when))) {
        return res.status(400).json({ error: "Escolha data e hora futura!" });
      }
      exists = await TaskModel.findOne({
        when: { $eq: new Date(when) },
        macaddress: { $in: macaddress },
      });
    }

    if (exists) {
      return res
        .status(400)
        .json({ error: "Ja existe tarefa nesse dia e horario!" });
    }
    next();
  }
};

module.exports = TaskValidation;
