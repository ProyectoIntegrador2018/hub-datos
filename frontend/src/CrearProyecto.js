import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import CollectionForm from "./components/CollectionForm";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { _handlePreview } from "./Utilities";

function CrearProyecto() {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [description, setDescription] = useState("");
  const [encargado, setEncargado] = useState("");
  const [image, setImage] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("Activo");
  const [partners, setPartners] = useState([""]);

  const _handleChange = (e) => {
    e.preventDefault();
    _handlePreview(e, setImage, setImgUrl);
  };

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

  const _postHandler = () => {
    const data = {
      nombre: title,
      abstract: abstract,
      descripcion: description,
      encargado: encargado,
      estatus: status,
      createdAt: new Date(startDate),
      fechaFin: new Date(endDate),
      partners: partners,
    };

    return axios
      .post("ruta necesaria", data)
      .then((response) => {
        return null;
      })
      .catch((error) => {
        if (error.response) {
          return error.response.data.message;
        } else {
          return error.message;
        }
      });
  };

  const _postProject = async () => {
    let response = await _postHandler();
    if (response) {
      toast.error(response);
    } else {
      toast.success("Proyecto creado !");
    }
  };

  return (
    <>
      <ToastContainer draggable={false} autoClose={4000} />
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
        action={_postProject}
        type="Crear"
      />
    </>
  );
}

export default CrearProyecto;
