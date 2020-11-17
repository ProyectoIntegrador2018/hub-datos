import axios from "axios";
import Details from "./components/Details";
import Loader from "./components/Loader";
import React, { useState, useEffect } from "react";
import URI from "./URI";
import { getId } from "./Utilities";
import { type } from "jquery";


function EventDetails() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState(null);
  const [img, setImg] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const id = getId();
      const { data } = await axios(`${URI.base}${URI.routes.eventById}${id}`);
      const {nombre, imagen, fecha, descripcionLarga} = data;
      const dateArr = fecha.split('T')[0].split('-');
      const dateStr = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`

      setName(nombre);
      setImg(imagen);
      setDate(dateStr);
      setDescription(descripcionLarga)
      setLoading(false);
    };

    fetchEvents();
  }, []);
  
  return loading ? (
    <Loader />
    ): (
    <Details
      author="Autor del evento"
      date={date}
      description={description}
      imgUrl={img}
      title={name}
    />
  );
}

export default EventDetails;
