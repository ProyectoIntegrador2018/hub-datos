import React from "react";
import { render } from "@testing-library/react";
import CollectionForm from "./CollectionForm";

test("renders collection form", () => {
  const { getByText } = render(
    <CollectionForm
      title="title"
      abstract="abstract"
      description="description"
      imgUrl="https://picsum.photos/2000/400"
      encargado="encargado"
      startDate="2020-01-02"
      endDate="2020-01-03"
      status="Activo"
      partners={["Microsoft"]}
      variant="Proyecto"
      action="Editar"
      type="Editar"
    />
  );

  getByText("Editar Proyecto");
  getByText("Datos del Proyecto");
  getByText("Titulo");
  getByText("Descripción Corta");
  getByText("Descripción Detallada");
  getByText("Encargado del Proyecto");
  getByText("Estatus del Proyecto:");
  getByText("Inicio del Proyecto");
  getByText("Fin del Proyecto");
  getByText("Sube una imagen para tu proyecto");
  getByText("Partners");
  getByText("Agregar Partner");
  getByText("Editar");
  getByText("Microsoft");
  getByText("Saphana");
  getByText("Intel");
  getByText("Amazon Web Services");
  getByText("Dell EMC");
  getByText("Oracle");
  getByText("IBM Watson");
  getByText("Cisco");
  getByText("Tableau");
  getByText("Cemex");
  getByText("Heineken");
  getByText("Chevron");
  getByText("Arca Continental");
});
