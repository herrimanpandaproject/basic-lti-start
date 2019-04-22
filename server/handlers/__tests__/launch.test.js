"use strict";

const request = require("supertest");
const app = require("../../app")({});

test("post redirects to /", async () => {
  await request(app)
    .post("/launch")
    .expect("Location", "/")
    .expect(302);
});