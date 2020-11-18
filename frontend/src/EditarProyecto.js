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
      setAbstract(data.descripcionCorta);
      setDescription(data.descripcionLarga);
      setImgUrl(data.imagen);
      // get dates
      let start = data.fechaInicio.slice(0, 10);
      setStartDate(start);
      let end = data.fechaFin.slice(0,10);
      setEndDate(end); // using dummy data until model updates
      const stat = data.finalizado ? "Finalizado" : "Activo";
      setStatus(stat);
      setEncargado(data.encargado);
      setPartners(data.socios);
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
    const today = new Date();
    const fechaFinalizo = new Date(endDate);
    const finalizado = fechaFinalizo < today;

    const data = new FormData();
    data.append("nombre", title);
    data.append("encargado", encargado);
    data.append("socios", JSON.stringify(partners));
    data.append("descripcionCorta", abstract);
    data.append("descripcionLarga", description);
    data.append("fechaInicio", new Date(startDate));
    data.append("finalizo", finalizado);
    data.append("fechaFin", fechaFinalizo);
    if(image !== null) {
      data.append("imagen", image);
    }
    data.append("createdBy", localStorage.getItem("id"));

    return axios
      .put(`${URI.base}${URI.routes.editProject}${id}`, data, {
        headers: {
          sessiontoken: `${localStorage.getItem("token")}`,
        },
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

  const _editProject = async () => {
    setLoading(true);
    let response = await _editHandler();
    setLoading(false);
    if (response) {
      toast.error(response);
    } else {
      history.push(`/Proyectos/${id}`);
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
        action={_editProject}
        type="Editar"
      />
    </>
  );
}

export default EditarProyecto;
