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
    const fetchProjects = async () => {
      const { data } = await axios(`${URI.base}${URI.routes.myProjects}`, {

        headers: {
          sessiontoken: `${localStorage.getItem('token')}`
        }
      });
      console.log(data);
      const projectChunks = splitProjects(data);

      setProjects(projectChunks);
    };

    fetchProjects();
  }, []);

  const visualDelete = (id) => {
    let projArray = projects.flat();
    projArray = projArray.filter((obj) => obj.id !== id);
    projArray = splitProjects(projArray);
    setProjects(projArray);
  }

  const _deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8000/${URI.routes.deleteProject}${id}`, {
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

  const _deleteProject = async (id) => {
    let response = await _deleteHandler(id);
    if (response) {
      toast.error(response);
    } else {
      toast.success("Proyecto Eliminado!");
      visualDelete(id);
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
