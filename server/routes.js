"use strict";

module.exports = app => {
  app.get("/", require("./handlers/app"));
  app.get("/config", require("./handlers/config"));
  app.post("/launch", require("./handlers/launch"));
}