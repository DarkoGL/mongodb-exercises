const express = require("express");
require("dotenv").config();

const { connectDb } = require("./utils/db");

const PORT = process.env.PORT || 8080;
const server = express();

server.get("/", (req, res) =>{
    return res.send({name: "DarkoGL"});
})

connectDb();

server.listen(PORT, () =>{
    console.log(`Server running in http://localhost:${PORT}`);
})

