const router = require("express").Router();

//CHECK USER
router.post("/getScores", async (req, res) => {
  const { userScore } = req.body;

  const mockScores = [
    { name: "John", score: 45 },
    { name: "Mark", score: 21 },
    { name: "Miley", score: 33 },
    { name: "Josh", score: 40 },
    { name: "Danny", score: 47 },
    { name: "Sophie", score: 12 },
    { name: "Bill", score: 28 },
    { name: "Kate", score: 42 },
    { name: "Joe", score: 10 },
  ];

  mockScores.push(userScore);

  return res.status(200).send(mockScores);
});

module.exports = router;
