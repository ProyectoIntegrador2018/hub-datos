const eventModel = require("../models/Event");

const getAllEvents = async function (req, res) {
  try {
    const events = await eventModel.find({});
    let paginas = 1;
    if (events.length > 12) {
      paginas = Math.ceil(events.length / 12);
    }
    return res.status(200).send({
      events,
      paginas,
    });
  } catch (e) {
    return res.status(500).send(e);
  }
};

const newEvent = async function (req, res) {
  const event = new eventModel();
  event.nombre = req.body.nombre;
  event.fecha = req.body.fecha;
  event.cupo = req.body.cupo;
  event.ubicacion = req.body.ubicacion;
  event.createdBy = req.user._id;

  try {
    await event.save();
    return res.status(201).send(event);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const geteEventByID = async function (eventId, res) {
  const idParam = eventId;
  try {
    const event = await eventModel.findOne({
      id: idParam,
    });
    if (event) {
      return res.status(200).send(event);
    } else {
      return res.status(404).send({
        error: `No se encontro el evento con id ${idParam}`,
      });
    }
  } catch (err) {
    return res.status(500).send(err);
  }
};

const editEventByID = async function (req, res) {
  try {
    var query = await eventModel
      .findOne({
        id: req.params.id,
      })
      .lean();
  } catch (err) {
    return res.status(500).send(err);
  }

  if (!query) {
    res.statusMessage = "Proyecto no encontrado.";
    return res.status(404).end();
  }

  if (req.user.role !== "administrador") {
    if (!query.createdBy.equals(req.user._id)) {
      res.statusMessage = "No tiene permiso para editar este proyecto.";
      return res.status(403).end();
    }
  }

  const event = req.body;

  try {
    await eventModel.updateOne(query, event);
    let response = {
      ...query,
      ...project,
    };
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const deleteEventByID = async function (eventId, res) {
  const idParam = eventId;
  try {
    const query = await eventModel.findOne({
      id: idParam,
    });
    await eventModel.deleteOne(query);
    return res.status(200).send("SUCCES");
  } catch (err) {
    res.status(500).send(err);
  }
};

const userEvents = async (req, res) => {
  let event;
  try {
    event = await eventModel.find({ createdBy: req.user._id });
  } catch (e) {
    return res.status(500).json(e);
  }
  return res.status(200).json(event);
};

module.exports = {
  getAllEvents: getAllEvents,
  newEvent: newEvent,
  geteEventByID: geteEventByID,
  editEventByID: editEventByID,
  deleteEventByID: deleteEventByID,
  userEvents: userEvents,
};