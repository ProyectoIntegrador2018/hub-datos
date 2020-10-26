import axios from "axios";
import CardView from "./components/CardView";
import Loader from "./components/Loader";
import React, { useState, useEffect } from "react";
import URI from "./URI";
import { splitProjects } from "./Utilities";

function Proyectos() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
     /* const { data } = await axios(`${URI.base}${URI.routes.allProjects}`);
      const { projects, } = data;*/
      const { data } = await axios(`http://localhost:8000/${URI.routes.allProjects}`);
      const {projects, paginas} = data;
      console.log(projects, paginas);

      const projectChunks = splitProjects(projects);

      setProjects(projectChunks);
    };

    fetchProjects();
  }, []);

  return !projects ? (
    <Loader />
  ) : (
    <CardView header="Proyectos" collection={projects} type="proyecto" />
  );
}

export default Proyectos;
