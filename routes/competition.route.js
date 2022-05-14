const { getCompetitions, postData, postUsers, postSubmissions, getSubmissionByCompetitionId, postSubmissionLike } = require("../controllers/competition.controller");
const router = require("express").Router();

router.get('/:id/submissions', getSubmissionByCompetitionId);
router.get('/', getCompetitions);

module.exports = router

// postData()
// postUsers()
// postSubmissions()
// postSubmissionLike()