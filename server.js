// only serves as local server to display the app
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

app.get("/api/cart", (_, res) => {
    const carts = [
        {
            title: "Hanna Gown",
            category: "Bronk and Banco",
            price: 4883.94,
            qty: 1,
            size: "S",
            color: "Multi Color",
            img: "./assets/images/categories/night-out.png",
        },
        {
            title: "Astrid Dress",
            category: "ELLIATT",
            price: 1449.69,
            qty: 1,
            size: "S",
            color: "Multi",
            img: "./assets/images/categories/outwear.png",
        },
    ];
    res.json(carts);
});

app.use(express.static(__dirname + "/"));

app.get("/*", (_, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
    console.log("Server started at http://localhost:" + port);
});
