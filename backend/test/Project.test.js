const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");

afterAll(() => mongoose.disconnect());

test("Se comprueba la ruta GET /projects", async (done) => {
  const response = await request(app).get("/projects");
  expect(response.statusCode).toBe(200);
  done();
});

test("Se comprueba la ruta GET /projects/:id", async (done) => {
  const projectId = "52094ba7-e844-4256-bac8-0f984360bea7";
  const response = await request(app).get("/projects/" + projectId);
  expect(response.statusCode).toBe(200);
  done();
});

test("Se comprueba la ruta POST /projects", async (done) => {
  data = {
    nombre: "PRUEBA",
    descripcion: "PRUEBA",
    vision: "PRUEBA",
    tipo: "Academico",
    numeroTotalAlumnos: 7,
    metodologia: "PRUEBA",
    entregables: "PRUEBA",
    estatus: "PRUEBA",
    imagen: "https://www.foodnewslatam.com/images/stories/2016/Abril/Arca-Continental-invierte-coca-cola.jpg",
  };
  const result = await request(app).post("/projects").send(data);
  expect(result.statusCode).toBe(200);
  done();
  // expect(body).toHaveProperty("nombre", "PRUEBA");
  // expect(body).toHaveProperty("descripcion", "PRUEBA");
  // expect(body).toHaveProperty("vision", "PRUEBA");
  // expect(body).toHaveProperty("tipo", "Academico");
  // expect(body).toHaveProperty("numeroTotalAlumnos", 7);
  // expect(body).toHaveProperty("metodologia", "PRUEBA");
  // expect(body).toHaveProperty("entregables", "PRUEBA");
  // expect(body).toHaveProperty("estatus", "PRUEBA");
  // expect(body).toHaveProperty("nombre", "PRUEBA");
  // expect(body).toHaveProperty("imagen", "https://www.foodnewslatam.com/images/stories/2016/Abril/Arca-Continental-invierte-coca-cola.jpg");

  // const response = await request(app).post("/projects").send(data);
});
