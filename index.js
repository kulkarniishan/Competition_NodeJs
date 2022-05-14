const express = require('express')
const competitionRoute = require('./routes/competition.route')
const http = require('http')
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const httpError = require('http-errors');

// configurations
require('./configs/mongodb.config')


//Server configurations
const port = process.env.PORT || 8080
const app = express()
const server = http.createServer(app)
const version = '1.0.0'


//documentation configurations
const swaggerOptions = {
    definition: {
        info: {
            title: 'Competitions',
            version: version,
        },
    },
    apis: ['index.js', './routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/test', (req, res) => {
    res.send("testing the api")
})
app.use('/competition', competitionRoute)

//Invalid route
app.use(async (req, res, next) => {
    next(httpError.NotFound('This route does not exist'))
})

//error handling
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
        },
    })
})


server.listen(port, () => {
    console.log(`Server listening on port ${port}!`)
})