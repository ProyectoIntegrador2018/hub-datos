const eventModel = require("../models/Event");
const s3 = require("./../services/aws");

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
  event.descripcionCorta = req.body.descripcionCorta;
  event.descripcionLarga = req.body.descripcionLarga;
  event.createdBy = req.user._id;

  try {
    var s3Response = await s3.uploadS3(req, "events");
  } catch (e) {
    res.statusMessage = "Error subiendo la foto a S3 (AWS)";
    return res.status(500).json(e);
  }

  event.imagen = s3Response.Location;

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
    var query = await eventModel.findOne({ id: req.params.id }).lean();
  } catch (err) {
    return res.status(500).send(err);
  }

  if (!query) {
    res.statusMessage = "Evento no encontrado.";
    return res.status(404).end();
  }

  if (req.user.role !== "administrador") {
    if (!query.createdBy.equals(req.user._id)) {
      res.statusMessage = "No tiene permiso para editar este evento.";
      return res.status(403).end();
    }
  }

  let event = req.body;
  let fileName = query.imagen.split("/");
  fileName = fileName[fileName.length - 1];

  if (req.file) {
    try {
      let s3Response = await s3.uploadS3(req, "events");
      event.imagen = s3Response.Location;
    } catch (e) {
      res.statusMessage = "Error subiendo la foto a S3 (AWS)";
      return res.status(500).json(e);
    }

    try {
      await s3.deleteS3("events", fileName);
    } catch (e) {
      res.statusMessage = "Error borrando la foto vieja en S3 (AWS)";
      return res.status(500).json(e);
    }
  }

  try {
    await eventModel.updateOne(query, event);
    let response = {
      ...query,
      ...event,
    };
    return res.status(200).json(response);
  } catch (err) {
    res.statusMessage = "Error actualizando el documento en la base de datos";
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
