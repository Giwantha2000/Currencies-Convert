const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//middel wares
app.use(express.json());
app.use(cors());

//All curences-40http://localhost:3000/
app.get

//lissten toa pot
app.listen(5000, () => {
    console.log("SERVER STARTED");

});