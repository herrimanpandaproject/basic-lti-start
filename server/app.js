"use strict";

const express = require("express");
const {join} = require("path");
const routes = require("./routes");

module.exports = env => {
  const app = express();

  // configure express application
  const port = env.PORT || 3000;
  app.set("port", port);
  app.set("view engine", "ejs");
  app.set("trust proxy", "true");
  app.set("views", join(__dirname, "views"));
  app.set("views", join(__dirname, "views"));
  app.locals.assetBaseUrl = env.ASSET_HOST || null;

  // configure middleware
  if (!app.locals.assetHost) {
    app.use(express.static(join(__dirname, "..", "public")));
  }

  // register routes
  routes(app);

  return app;
};


