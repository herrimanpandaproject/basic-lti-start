const {join} = require("path");
const baseConfig = require("@instructure/ui-webpack-config");

module.exports = {
  ...baseConfig,
  entry: join(__dirname, "client", "index.js"),
  output: {path: join(__dirname, "public/dist")}
};