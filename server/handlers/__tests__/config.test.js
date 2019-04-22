"use strict";

const request = require("supertest");
const app = require("../../app")({});

test("get returns xml config", async () => {
  await request(app)
    .get("/config")
    .expect("Content-Type", "text/xml; charset=utf-8")
    .expect(200);
});