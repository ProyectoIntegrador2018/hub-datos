import React from "react";
import "./App.css";
import Image from "react-bootstrap/Image";
import Img from "./assets/avatar2.png";
import Img2 from "./assets/avatar6.png";
import "./NuestraGente.css";

function NuestraGente() {
  return (
    <div className="container">
      <div class="row text-center people">
        <div class="col-xl-4 col-sm-6 mb-5">
          <div class="bg-white rounded shadow py-5 px-4">
            <img
              src={Img2}
              alt=""
              width="180"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 class="mb-0">Dra. Lorena Gómez</h5>
            <span class="small text-uppercase text-muted">To be defined</span>
          </div>
        </div>
        <div class="col-xl-4 col-sm-6 mb-5">
          <div class="bg-white rounded shadow py-5 px-4">
            <img
              src={Img}
              alt=""
              width="180"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 class="mb-0">Dr. Leonardo Garrido</h5>
            <span class="small text-uppercase text-muted">To be defined</span>
          </div>
        </div>
        <div class="col-xl-4 col-sm-6 mb-5">
          <div class="bg-white rounded shadow py-5 px-4">
            <img
              src={Img}
              alt=""
              width="180"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 class="mb-0">Dr. Juan Carlos Lavariega</h5>
            <span class="small text-uppercase text-muted">To be defined</span>
          </div>
        </div>
        <div class="col-xl-4 col-sm-6 mb-5">
          <div class="bg-white rounded shadow py-5 px-4">
            <img
              src={Img2}
              alt=""
              width="180"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 class="mb-0">Dra. Lorena B. Martínez Elizalde</h5>
            <span class="small text-uppercase text-muted">To be defined</span>
          </div>
        </div>
        <div class="col-xl-4 col-sm-6 mb-5">
          <div class="bg-white rounded shadow py-5 px-4">
            <img
              src={Img2}
              alt=""
              width="180"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 class="mb-0">Maria Elena Diec</h5>
            <span class="small text-uppercase text-muted">MC</span>
          </div>
        </div>
        <div class="col-xl-4 col-sm-6 mb-5">
          <div class="bg-white rounded shadow py-5 px-4">
            <img
              src={Img}
              alt=""
              width="180"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 class="mb-0">David Cantú</h5>
            <span class="small text-uppercase text-muted">MC</span>
          </div>
        </div>
        <div class="col-xl-4 col-sm-6 mb-5">
          <div class="bg-white rounded shadow py-5 px-4">
            <img
              src={Img}
              alt=""
              width="180"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 class="mb-0">Dr. Raúl Ramírez</h5>
            <span class="small text-uppercase text-muted">To be defined</span>
          </div>
        </div>
        <div class="col-xl-4 col-sm-6 mb-5">
          <div class="bg-white rounded shadow py-5 px-4">
            <img
              src={Img2}
              alt=""
              width="180"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 class="mb-0">Etna Rojas</h5>
            <span class="small text-uppercase text-muted">MC</span>
          </div>
        </div>
        <div class="col-xl-4 col-sm-6 mb-5">
          <div class="bg-white rounded shadow py-5 px-4">
            <img
              src={Img}
              alt=""
              width="180"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 class="mb-0">Jesús Aguilar</h5>
            <span class="small text-uppercase text-muted">MC</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NuestraGente;
