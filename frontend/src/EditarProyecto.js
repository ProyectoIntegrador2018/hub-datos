import "./App.css";
import CollectionForm from "./components/CollectionForm";
import React, { useState, useEffect } from "react";
import { _handlePreview } from "./Utilities";

function EditarProyecto() {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
      const fetchData = async () => {
        /*
         const { data } = await axios(`${URI}`);
        */

        setTitle("Mi Proyecto");
        setAbstract("asdasdasdas");
        setDescription("asdjfbaspdfkna;sdkjfa;kldbfasd");
        setImgUrl("https://picsum.photos/1000/410");
      }

      fetchData();
  }, []);

  const _handleChange = (e) => { _handlePreview(e, setImage, setImgUrl) };
  console.log(title);
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

export default EditarProyecto;
