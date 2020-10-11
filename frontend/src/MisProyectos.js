import axios from "axios";
import CardView from "./components/CardView";
import Loader from "./components/Loader";
import React, { useState, useEffect } from "react";
import URI from "./URI";
import { splitProjects } from "./Utilities";

function MisProyectos() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      /* code needed later to fetch data needed for the page */
      const { data } = await axios(`${URI.base}${URI.routes.allProjects}`);
      const { projects, } = data;
      const projectChunks = splitProjects(projects);

      setProjects(projectChunks);
    };

    fetchEvents();
  }, []);
  
  return !projects ? (
    <Loader />
  ) : (
    <CardView header="Mis Proyectos" collection={projects} type="proyecto" variant="delete" />
  );
}

export default MisProyectos;
