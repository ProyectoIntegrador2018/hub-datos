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

  const _handleChange = (e) => { _handlePreview(e, setImage, setImgUrl) };

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
    />
  );
}

export default CrearProyecto;
