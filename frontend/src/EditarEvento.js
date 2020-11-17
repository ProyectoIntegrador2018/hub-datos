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
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [partners, setPartners] = useState([]);
  const [cupo, setCupo] = useState(0);
  let history = useHistory();
  const id = getId();

  useEffect(() => {
    // fetch data from project and set in state to use for the form
    const fetchData = async () => {
      const { data } = await axios(`${URI.base}${URI.routes.editEvent}${id}`);
      console.log(data);
      setTitle(data.nombre);
      setAbstract(data.descripcionCorta);
      setDescription(data.descripcionLarga);
      setImgUrl(data.imagen);
      setCupo(data.cupo);

      // get dates
      let date = data.fecha.slice(0, 10);
      setDate(date);
      // //let end = data.fechaFin.slice(0,10);
      // //setEndDate(end); // using dummy data until model updates
      // const stat = data.finalizado ? "Finalizado" : "Activo";
      // setStatus(stat);
      // setEncargado(data.encargado);
      // setPartners(data.socios);
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
    const data = new FormData();
    data.append('nombre', title);
    data.append('fecha', new Date(date));
    //data.append('encargado', encargado);
    //data.append('socios', partners);
    data.append('descripcionCorta', abstract);
    data.append('descripcionLarga', description);
    //data.append('finalizo', finalizo);
    //data.append('fechaFin', fechaFin);
    data.append('cupo', 10000);
    data.append('ubicacion', 'Tec Campus MTY');
    data.append('imagen', image);
    data.append('createdBy', localStorage.getItem('id'));

    return axios
      .put(`${URI.base}${URI.routes.editEvent}${id}`, data, {
        headers: {
          sessiontoken: `${localStorage.getItem('token')}`,
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

  const _editEvent = async () => {
    setLoading(true);
    let response = await _editHandler();
    setLoading(false);
    if (response) {
      toast.error(response);
    } else {
      history.push(`/Eventos/${id}`);
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
        startDate={date}
        setStartDate={setDate}
        endDate={""}
        setEndDate={null}
        status={status}
        setStatus={setStatus}
        partners={partners}
        setPartners={_handlePartners}
        cupo={cupo}
        setCupo={setCupo}
        variant="Evento"
        action={_editEvent}
        type="Editar"
      />
    </>
  );
}

export default EditarProyecto;
