"use strict";

const app = require("./app")(process.env);
const port = app.get("port");
app.listen(port);
console.log(`Server listening on port ${port}.`);