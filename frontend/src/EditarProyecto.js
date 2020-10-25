import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import CollectionForm from "./components/CollectionForm";
import Loader from "./components/Loader";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import URI from "./URI";
import { _handlePreview, getId } from "./Utilities";
import { useHistory } from "react-router-dom";

function EditarProyecto() {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [description, setDescription] = useState("");
  const [encargado, setEncargado] = useState("");
  const [image, setImage] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");
  const [partners, setPartners] = useState([]);
  let history = useHistory();
  const id = getId();

  useEffect(() => {
    // fetch data from project and set in state to use for the form
    const fetchData = async () => {
      const { data } = await axios(`${URI.base}${URI.routes.projectByID}${id}`);
      setTitle(data.nombre);
      setAbstract(data.descripcion);
      setDescription(data.descripcion);
      setImgUrl(data.imagen);

      // get dates
      let start = data.createdAt.slice(0,10);
      setStartDate(start);
      // let end = data.finishedAt.slice(0,10);
      setEndDate("2020-02-03"); // using dummy data until model updates

      let status = data.estatus.toLowerCase() === "abierto" ? "Activo" : "Finalizado";
      setStatus(status);

      setEncargado("Lala");
      setPartners([]);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  const _handlePartners = (newPartner, index, option) => {
    let newPartners = [...partners];
    if (option === "add") {
      return setPartners(newPartner);
    } else if (option === "delete") {
      newPartners.splice(index, 1);
    } else {
      newPartners[index] = newPartner;
    }
    setPartners(newPartners);
  };

  const _handleChange = (e) => {
    _handlePreview(e, setImage, setImgUrl);
  };

  const _editHandler = () => {
    const data = {
      nombre: title,
      abstract: abstract,
      descripcion: description,
      encargado: encargado,
      estatus: status,
      createdAt: new Date(startDate),
      fechaFin: new Date(endDate),
      partners: partners
    }

    return axios.put("ruta necesaria", data)
    .then((response) => {
      return null;
    })
    .catch((error) => {
      if (error.response) {
        return error.response.data.message;
      } else return error.message;
    });
  }

  const _editProject = async () => {
    let response = await _editHandler();
    if (response) {
      toast.error(response);
    } else {
      history.push(`/Proyectos/${id}`)
    }
  }
  
  return loading ? (
    <Loader />
  ) : (
    <>
    <ToastContainer 
      draggable={false}
      autoClose={4000}
    />
    <CollectionForm
      title={title}
      setTitle={setTitle}
      abstract={abstract}
      setAbstract={setAbstract}
      description={description}
      setDescription={setDescription}
      encargado={encargado}
      setEncargado={setEncargado}
      imgUrl={imgUrl}
      _handleChange={_handleChange}
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
      status={status}
      setStatus={setStatus}
      partners={partners}
      setPartners={_handlePartners}
      variant="Proyecto"
      action={_editProject}
      type="Editar"
    />
    </>
  );
}

export default EditarProyecto;
