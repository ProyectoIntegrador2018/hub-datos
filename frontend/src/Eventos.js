import axios from "axios";
import CardView from "./components/CardView";
import Loader from "./components/Loader";
import React, { useState, useEffect } from "react";
import URI from "./URI";
import { splitProjects } from "./Utilities";

function Proyectos() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await axios(`${URI.base}${URI.routes.allEvents}`);
      const { events, paginas } = data;
      
      const eventChunks = splitProjects(events);

      setEvents(eventChunks);
    };

    fetchEvents();
  }, []);

  return !events ? (
    <Loader />
  ) : (
    <CardView header="Eventos" collection={events} type="evento" />
  );
}

export default Proyectos;
