const { getCompetitions } = require("../controllers/competition.controller");
const router = require("express").Router();

router.get('/', getCompetitions);
router.get('/:id/submissions', getCompetitions);


module.exports = router