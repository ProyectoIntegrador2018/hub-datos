const supertest = require("supertest");
const app = require("../app");
const request = supertest(app);
const mongoose = require("mongoose");

afterAll(() => mongoose.disconnect());

describe("Test de los endpoints de Users", () => {
  test("Se comprueba la ruta GET /users", async (done) => {
    const response = await request.get("/users");
    expect(response.statusCode).toBe(200);
    done();
  });
});
