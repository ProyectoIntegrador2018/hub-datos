import "./App.css";
import CollectionForm from "./components/CollectionForm";
import Loader from "./components/Loader";
import React, { useState, useEffect } from "react";
import { _handlePreview } from "./Utilities";

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

  useEffect(() => {
    const fetchData = async () => {
      /*
         const { data } = await axios(`${URI}`);
        */

      setTitle("Mi Proyecto");
      setAbstract("asdasdasdas");
      setDescription("asdjfbaspdfkna;sdkjfa;kldbfasd");
      setEncargado("Lala");
      setImgUrl("https://picsum.photos/1000/410");
      setStartDate("2020-02-02");
      setEndDate("2020-02-03");
      setStatus("Activo");
      setPartners(["Microsoft"]);
      setLoading(false);
    };

    fetchData();
  }, []);

  const _handlePartners = (e) => {
    e.preventDefault();
    const newPartner = e.target.value;
    const newPartners = [...partners, newPartner];
    setPartners(newPartners);
  };

  const _handleChange = (e) => {
    _handlePreview(e, setImage, setImgUrl);
  };

  console.log(partners);

  return loading ? (
    <Loader />
  ) : (
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
    />
  );
}

export default EditarProyecto;
