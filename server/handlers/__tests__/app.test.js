"use strict";

const request = require("supertest");
const app = require("../../app")({});

test("returns html response", async () => {
  await request(app)
    .get("/")
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(200);
});