const express = require("express");
require("./src/database/connection");
const MensRanking = require("./src/models/mens");
const router = require("./src/routers/routes");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use(router);

app.listen(port, ()=>{
    console.log(`connection is live at port no. ${port}`);
});
