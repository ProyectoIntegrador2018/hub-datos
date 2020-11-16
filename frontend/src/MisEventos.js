import axios from "axios";
import CardView from "./components/CardView";
import Loader from "./components/Loader";
import React, { useState, useEffect } from "react";
import URI from "./URI";
import { splitProjects } from "./Utilities";
import { ToastContainer, toast } from "react-toastify";

function MisEventos() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      // cambiar por ruta de eventos cuando endpoint sea creado
      const { data } = await axios(`${URI.base}${URI.routes.myProjects}`, {
        headers: {
          sessiontoken: `${localStorage.getItem('token')}`
        }
      });
      const eventChunks = splitProjects(data);

      setEvents(eventChunks);
    };

    fetchEvents();
  }, []);

  const visualDelete = (id) => {
    let eventArray = eventArray.flat();
    eventArray = eventArray.filter((obj) => obj.id !== id);
    eventArray = splitProjects(eventArray);
    setEvents(eventArray);
  }

  const _deleteHandler = (id) => {
    axios
      .delete(`${URI.base}${URI.routes.deleteProject}${id}`, {
        headers: {
          sessiontoken: `${localStorage.getItem('token')}`
        }
      })
      .then((response) => {
        return null;
      })
      .catch((error) => {
        if (error.response) {
          return error.response.data.message;
        } else return error.message;
      });
  };

  const _deleteEvent = async (id) => {
    let response = await _deleteHandler(id);
    if (response) {
      toast.error(response);
    } else {
      toast.success("Evento Eliminado!");
      visualDelete(id);
    }
  };

  return !events ? (
    <Loader />
  ) : (
    <>
      <ToastContainer draggable={false} autoClose={4000} />
      <CardView
        header="Mis Eventos"
        collection={events}
        type="evento"
        variant="delete"
        deleteHandler={_deleteEvent}
      />
    </>
  );
}

export default MisEventos;
