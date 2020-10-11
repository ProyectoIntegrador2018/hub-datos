const supertest = require("supertest");
const app = require("../app");
const request = supertest(app);
const mongoose = require("mongoose");

afterAll(() => mongoose.disconnect());

describe("Test de los endpoints de Projects", () => {
  test("Se comprueba la ruta GET /projects", async (done) => {
    const response = await request.get("/projects");
    expect(response.statusCode).toBe(200);
    done();
  });

  test("Se comprueba la ruta GET /projects/:id", async (done) => {
    const projectId = "52094ba7-e844-4256-bac8-0f984360bea7";
    const response = await request.get("/projects/" + projectId);
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
    const result = await request.post("/projects").send(data);
    expect(result.statusCode).toBe(200);
    done();
  });
});
