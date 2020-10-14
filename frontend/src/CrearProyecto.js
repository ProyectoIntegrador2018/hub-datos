import "./App.css";
import CollectionForm from "./components/CollectionForm";
import React, { useState } from "react";
import { _handlePreview } from "./Utilities";

function CrearProyecto() {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("Activo");
  const [partners, setPartners] = useState([]);

  const _handleChange = (e) => {
    e.preventDefault();
    _handlePreview(e, setImage, setImgUrl);
  };

  const _handlePartners = (e) => {
    e.preventDefault();
    const newPartner = e.target.value;
    const newPartners = [...partners, newPartner];
    setPartners(newPartners);
  };

  return (
    <CollectionForm
      title={title}
      setTitle={setTitle}
      abstract={abstract}
      setAbstract={setAbstract}
      description={description}
      setDescription={setDescription}
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
    />
  );
}

export default CrearProyecto;
