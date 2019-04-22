"use strict";

function reqBaseUrl(req) {
  const port = req.app.get("port");
  let url = `${req.protocol}://${req.hostname}`
  const defaultPort =
    (port === 80 && req.protocol === "http") ||
    (port === 443 && req.protocol === "https");
  if (!defaultPort) {
    url += `:${port}`;
  }
  return url;
}

module.exports = (req, res) => {
  res.setHeader("content-type", "text/xml");
  res.render("config", {
    baseUrl: reqBaseUrl(req),
    domain: "localhost"
  });
};