import axios from "axios";
import React, { useState, useEffect } from "react";
import CardView from "./components/CardView";
import URI from "./URI";

function Proyectos() {
  const [projects, setProjects] = useState(null);

  const splitProjects = (projectList) => {
    // split projects into chunks of 5 to map in the card rows
    const projectChunks = [];
    while (projectList.length) {
      projectChunks.push(projectList.splice(0, 3));
    }

    return projectChunks;
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await axios(`${URI.base}${URI.routes.allProjects}`);
      const {projects, paginas} = data;
      console.log(projects, paginas);

      const projectChunks = splitProjects(projects);

      setProjects(projectChunks);
    };

    fetchProjects();
  }, []);

  console.log(projects)
  return <CardView header="Proyectos" collection={projects} type="proyecto" />;
}

export default Proyectos;
