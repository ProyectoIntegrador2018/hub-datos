import axios from "axios";
import CardView from "./components/CardView";
import Loader from "./components/Loader";
import React, { useState, useEffect } from "react";
import URI from "./URI";
import { splitProjects } from "./Utilities";
import { ToastContainer, toast } from "react-toastify";

function MisProyectos() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await axios(`${URI.base}${URI.routes.allProjects}`);
      const { projects } = data;
      const projectChunks = splitProjects(projects);

      setProjects(projectChunks);
    };

    fetchEvents();
  }, []);

  const _deleteHandler = (id) => {
    axios
      .delete(`${URI.base}${URI.routes.delete}${id}`)
      .then((response) => {
        return null;
      })
      .catch((error) => {
        if (error.response) {
          return error.response.data.message;
        } else return error.message;
      });
  };

  const _deleteProject = async (id) => {
    let response = await _deleteHandler(id);
    if (response) {
      toast.error(response);
    } else {
      toast.success("Proyecto Eliminado!");
    }
  };

  return !projects ? (
    <Loader />
  ) : (
    <>
      <ToastContainer draggable={false} autoClose={4000} />
      <CardView
        header="Mis Proyectos"
        collection={projects}
        type="proyecto"
        variant="delete"
        deleteHandler={_deleteProject}
      />
    </>
  );
}

export default MisProyectos;
