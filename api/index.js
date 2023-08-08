require("dotenv").config();

const express = require("express");

const PORT = process.env.PORT || 5000;
const router = require("../app/routes");

const app = express();
app.use("/api/v1", router);

app.get("/", (req, res) => {
  return res.end("good");
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
