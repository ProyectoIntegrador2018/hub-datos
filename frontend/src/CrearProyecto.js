import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import CollectionForm from "./components/CollectionForm";
import Loader from "./components/Loader";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { _handlePreview } from "./Utilities";
import URI from "./URI";

function CrearProyecto(props) {
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
  const [loading, setLoading] = useState(false);

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
    const today = new Date();
    const fechaFin = new Date(endDate);
    const finalizo = fechaFin < today;

    const data = new FormData();
    data.append('nombre', title);
    data.append('encargado', encargado);
    data.append('socios', JSON.stringify(partners));
    data.append('descripcionCorta', abstract);
    data.append('descripcionLarga', description);
    data.append('fechaInicio', new Date(startDate));
    data.append('finalizo', finalizo);
    data.append('fechaFin', fechaFin);
    data.append('imagen', image);
    data.append('createdBy', localStorage.getItem('id'));

    return axios
      .post(`${URI.base}${URI.routes.createProject}`, data, {
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

  const _postProject = async () => {
    setLoading(true)
    let response = await _postHandler();
    setLoading(false);
    if (response) {
      toast.error(response);
    } else {
      //toast.success("Proyecto creado !");
      props.history.push("/MisProyectos")

    }
  };
  
  return loading ? (
    <Loader />
  ) : (
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
