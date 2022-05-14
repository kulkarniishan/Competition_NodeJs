const Competition = require('../models/competition.model')
const Submission = require('../models/submission.model')
const User = require('../models/user.model')
const Submissionlike = require('../models/submissionlike.model')



module.exports = {
    getCompetitions: async (req, res, next) => {
        console.log(" I am fired")
        Competition.find()
            .then((response) => {
                res.status(200).json(response);
            })
            .catch((err) => {
                res.status(404);
            })
    },
    getSubmissionByCompetitionId: async (req, res, next) => {

    }
}