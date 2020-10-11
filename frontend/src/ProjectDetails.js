import axios from "axios";
import React, { useState, useEffect } from "react";
import Details from "./components/Details";
import URI from "./URI";
import Spinner from 'react-bootstrap/Spinner'

function ProjectDetails() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState(null);
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(true);

  const getId = () => {
    let route = window.location.href;
    route = route.split("/");
    const id = route[route.length - 1];

    return id;
  };

  useEffect(() => {
    const fetchProject = async () => {
      const id = getId();
      const { data } = await axios(`${URI.base}${URI.routes.projectByID}${id}`);
      let { descripcion, imagen, nombre } = data;

      descripcion = [descripcion, ""]; // will not be needed when receiving full description
      setDescription(descripcion);
      setName(nombre);
      setImg(imagen);
      setLoading(false);

      //let paragraphs = descriptionParagraphs.split("\n");
      //setDescription(paragraphs.filter((section) => section !== ""));
    };

    fetchProject();
  }, []);

  return loading ? (
    <Spinner animation="grow" variant="dark" />
  ) : (
    <Details
      author="Encargado del proyecto"
      description={description}
      imgUrl={img}
      title={name}
    />
  );
}

export default ProjectDetails;
