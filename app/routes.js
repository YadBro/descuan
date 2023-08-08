const express = require("express");

const router = express.Router();

router.get("/insight", (req, res) => {
  const ansr = req.query?.chAnsr;
  const theAnsr = process.env.ANSR;

  const ansrD = process.env.ANSRD;
  const ansrM = process.env.ANSRM;

  if (ansr === theAnsr) {
    return res.send({
      ansrD: parseInt(ansrD),
      ansrM: parseInt(ansrM),
    });
  } else {
    return res.status(418).end("Kyuur");
  }
});

module.exports = router;
