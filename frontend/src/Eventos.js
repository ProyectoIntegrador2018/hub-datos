import React, { useState, useEffect } from "react";
import CardView from "./components/CardView";

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
      /* code needed later to fetch data needed for the page
      const { data } = await axios(`${URI}/ruta/del/endpoint`);
      const { totalPages, page } = data;
      const projectList = data.projects;
      */

      // mock data for the time being
      let eventList = [
        {
          nombre: "10K Challenge",
          descripcion: "10K Description",
          id: "Detalles",
          imagen: "https://picsum.photos/300/170"
        },
        {
          nombre: "Universities for Founders MTY",
          descripcion: "Universities for Founders Description",
          id: "Detalles",
          imagen: "https://picsum.photos/300/170"
        },
      ];

      const eventChunks = splitEvents(eventList);

      setEvents(eventChunks);
    };

    fetchEvents();
  }, []);

  return <CardView header="Eventos" collection={events} type="evento"/>;
}

export default Proyectos;
