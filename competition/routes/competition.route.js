const { getCompetitions, postUsers, postSubmissions, getSubmissionByCompetitionId, postSubmissionLike, postcompetitions } = require("../controllers/competition.controller");
const router = require("express").Router();

router.get('/:id/submissions', getSubmissionByCompetitionId);
router.get('/', getCompetitions);

module.exports = router

try {
  postUsers()
}
catch{
  
}
try {
  postcompetitions()
}
catch {

}
try {
  postSubmissionLike()

}
catch {

}
try {
  postSubmissions()
}
catch {

}




/**
 * @swagger
  * tags:
  *   name: Competition
  *   description: The Competitions service API
*/


/**
 * @swagger
 * /competition:
 *     get:
 *         tags: [Competition]
 *         description: Gets the all the Competitions
 *         responses:
 *             200:
 *                 description: responds with a 200 status with a json object with the response
 *             500:
 *                 description: responds with a 400 for any other Error (Bad Request)
 * 
 * /competition/{id}/submissions:
 *     get:
 *         tags: [Competition]
 *         description: Gets the all the Competitions
 *         parameters:
 *         -    name: id
 *              in: path
 *              description: description id of routeInfo 
 *              required: true
 *              type: string
 *                       
 *         responses:
 *             200:
 *                 description: responds with a 200 status with a json object with the response
 *             500:
 *                 description: responds with a 400 for any other Error (Bad Request)
 */