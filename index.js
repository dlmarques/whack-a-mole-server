const express = require("express");
const app = express();
const cors = require("cors");
const bp = require("body-parser");

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

const port = 3001;

//route variables
const gameRoute = require("./routes/game");

//routes configuration
app.use("/api/game", gameRoute);

//middleware
app.use(express.json());

app.listen(port, () => console.log(`server running on ${port}`));
