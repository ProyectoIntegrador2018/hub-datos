import React, { useState, useEffect } from "react";
import CardView from "./components/CardView";

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
      /* code needed later to fetch data needed for the page
      const { data } = await axios(`${URI}/ruta/del/endpoint`);
      const { totalPages, page } = data;
      const projectList = data.projects;
      */

      // mock data for the time being
      let projectList = [
        {
          title: "10K Challenge",
          description: "10K Description",
          route: "/Proyectos/Detalles",
        },
        {
          title: "Universities for Founders MTY",
          description: "Universities for Founders Description",
          route: "/Proyectos/Detalles",
        },
      ];

      const projectChunks = splitProjects(projectList);

      setProjects(projectChunks);
    };

    fetchProjects();
  }, []);

  return <CardView header="Eventos" collection={projects} type="proyecto" />;
}

export default Proyectos;
