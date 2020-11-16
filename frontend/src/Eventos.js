import axios from "axios";
import CardView from "./components/CardView";
import Loader from "./components/Loader";
import React, { useState, useEffect } from "react";
import URI from "./URI";
import { splitProjects } from "./Utilities";

function Proyectos() {
  const [events, setEvents] = useState(null);

  const splitEvents = (eventList) => {
    // split projects into chunks of 5 to map in the card rows
    const eventChunks = [];
    while (eventList.length) {
      eventChunks.push(eventList.splice(0, 3));
    }

    return eventChunks;
  };

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await axios(`${URI.base}${URI.routes.allEvents}`);
      const { events, paginas } = data;
      console.log(data);

      const eventChunks = splitEvents(events);

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
