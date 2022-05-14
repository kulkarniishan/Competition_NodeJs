const { getCompetitions, postData, postUsers, postSubmissions } = require("../controllers/competition.controller");
const router = require("express").Router();

router.get('/', getCompetitions);
router.get('/:id/submissions', getCompetitions);


module.exports = router

// postData()
// postUsers()
// postSubmissions()