const supertest = require("supertest");
const app = require("../app");
const request = supertest(app);
const mongoose = require("mongoose");
const projectModel = require("../models/Project");

var TEST_ID;

afterAll(() => mongoose.disconnect());

describe("Test de los endpoints de Projects", () => {
  test("Se comprueba la ruta GET /projects", async (done) => {
    const response = await request.get("/projects");
    expect(response.statusCode).toBe(200);
    done();
  });

  test("Se comprueba la ruta POST /projects", async (done) => {
    data = {
      nombre: "PRUEBAXYZFSDAF",
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
    expect(result.statusCode).toBe(201);
    done();
  });

  test("Se comprueba la ruta GET /projects/:id", async (done) => {
    const project = await projectModel.findOne({
      nombre: "PRUEBAXYZFSDAF",
      descripcion: "PRUEBA",
      vision: "PRUEBA",
    });
    TEST_ID = project.id;
    const response = await request.get("/projects/" + project.id);
    expect(response.statusCode).toBe(200);
    done();
  });

  test("Se comprueba la ruta PUT para editar proyectos /projects/edit/:id", async (done) => {
    data = {
      nombre: "PRUEBA1",
      descripcion: "PRUEBA1",
      vision: "PRUEBA1",
      tipo: "Academico 1",
      numeroTotalAlumnos: 7,
      metodologia: "PRUEBA 1",
      entregables: "PRUEBA 1",
      estatus: "PRUEBA 1",
      imagen: "https://www.foodnewslatam.com/images/stories/2016/Abril/Arca-Continental-invierte-coca-cola.jpg",
    };
    const result = await request.put("/projects/edit/" + TEST_ID).send(data);
    expect(result.statusCode).toBe(200);
    done();
  });

  test("Se comprueba la ruta DELETE para eliminar proyectos /projects/delete/:id", async (done) => {
    const result = await request.delete("/projects/delete/" + TEST_ID);
    expect(result.statusCode).toBe(200);
    done();
  });
});
