// only serves as local server to display the app
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/"));

app.get("/*", (_, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
    console.log("Server started at http://localhost:" + port);
});
