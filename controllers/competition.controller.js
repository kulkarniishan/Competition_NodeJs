const Competition = require('../models/competition.model')
const Submission = require('../models/submission.model')
const User = require('../models/user.model')
const Submissionlike = require('../models/submissionlike.model')
const { default: mongoose } = require('mongoose')



module.exports = {
    getCompetitions: async (req, res, next) => {
        Competition.aggregate([
            {
                $match: {},

            },
            {
                $lookup: { from: 'user', localField: 'author', foreignField: '_id', as: 'author' },
            },
            {
                $lookup: { from: 'submission', localField: '_id', foreignField: 'competition', as: 'submissions' }
            },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    description: 1,
                    author: { $arrayElemAt: ["$author", 0] },
                    submission: { $size: "$submissions" },

                }
            }
        ])
            .exec((err, results) => {
                if (err) {
                    return reject(err);
                }
                res.status(200).json(results);
            }
            )
        // .then((response) => {
        //     for (let i = 0; i < array.length; i++) {
        //         response[i] = { response };
        //     }
        //     res.status(200).json(response);
        // })
        // .catch((err) => {
        //     res.status(404);
        // })
    },
    getSubmissionByCompetitionId: async (req, res, next) => {

    },
    postcompetitions: (req, res, next) => {
        for (let index = 0; index < 5; index++) {
            const competition = new Competition({
                "_id": mongoose.Types.ObjectId(`537eed02ed345b2e039652d${index}`),
                "name": "Competition One",
                "description": "Sample Competition",
                "author": "5e4dcfbed99d2c2c4cc0efb3",
            })
            competition.save()
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
        }

    },
    postUsers: (req, res, next) => {
        for (let index = 0; index < 5; index++) {
            const user = new User({
                "_id": mongoose.Types.ObjectId(`5e4dcfbed99d2c2c4cc0efb${index}`),
                "name": "dhruv ramdev",
                "email": "pythonbrilliant@gmail.com"
            })
            user.save()
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
        }

    },
    postSubmissions: (req, res, next) => {
        for (let index = 0; index < 10; index++) {
            const submission = new Submission({
                "_id": mongoose.Types.ObjectId(`551137c2f9e1fac808a5f57${index}`),
                "image": "https://ikick-media.s3.ap-south-1.amazonaws.com/1584328440843-1582825976512.png",
                "competition": mongoose.Types.ObjectId(`537eed02ed345b2e039652d${index % 5}`),
                "author": mongoose.Types.ObjectId(`5e4dcfbed99d2c2c4cc0efb${index % 5}`),
            })
            submission.save()
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}

