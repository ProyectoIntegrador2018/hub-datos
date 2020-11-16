import axios from "axios";
import Details from "./components/Details";
import Loader from "./components/Loader";
import React, { useState, useEffect } from "react";
import URI from "./URI";
import { getId } from "./Utilities";

function ProjectDetails() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState(null);
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(true);
  const [encargado, setEncargado] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      const id = getId();
      const { data } = await axios(`${URI.base}${URI.routes.projectByID}${id}`);
      const { descripcionLarga, imagen, nombre, encargado } = data;

      setDescription(descripcionLarga);
      setName(nombre);
      setImg(imagen);
      setLoading(false);
      setEncargado(encargado);
    };

    fetchProject();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Details
      author={encargado}
      description={description}
      imgUrl={img}
      title={name}
    />
  );
}

export default ProjectDetails;
