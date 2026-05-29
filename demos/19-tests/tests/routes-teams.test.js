import { describe, expect, it } from "vitest";
import request from "supertest";
import app from "../../../exercices/corrections/5.3/app.mjs";
describe("Testing /teams routes", () => {
  describe("Testing GET /teams", () => {
    it("Should have JSON content", () => {
      request(app).get("/teams").expect("Content-Type", /json/);
    });

    it("Should have status 200", () => {
      request(app).get("/teams").expect(200);
    });

    it("Should have an array of teams", () => {
      return request(app)
        .get("/teams")
        .then((response) => {
          expect(Array.isArray(response.body)).toBe(true);
        });
    });
  });

  describe.skip("Testing POST /teams", () => {
    it("Should have 201 status", () => {
      return request(app)
        .post("/teams")
        .send({ id: "10", name: "Lyon" })
        .set("Accept", "application/json")
        .expect(201);
    });
    
    it("Should have JSON content", () => {
      return request(app)
      .post("/teams")
      .send({ id: "10", name: "Lyon" })
      .set("Accept", "application/json")
      .expect('Content-Type', /json/)
    });

    it("Should have body response { message, success: true }", () => {
      return request(app)
      .post("/teams")
      .send({ id: "10", name: "Lyon" })
      .set("Accept", "application/json")
      .then(response => {
        expect(response.body).toEqual({ message: 'Team created', success: true})
      })
    });

    it("Should have status 500 (bad JSON sent)", () => {
      return request(app)
      .post("/teams")
      .send({})
      .set("Accept", "application/json")
      .expect(400)
      .then(response => {
        expect(response.body).toEqual({ message: 'new team should have an id and a name', success: false})
      })
    });
  });
});
