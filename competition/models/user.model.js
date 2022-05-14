const mongoose = require('mongoose')
var Schema = mongoose.Schema;
mongoose.pluralize(null);

var userSchema = new Schema({
    name: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        default: ""
    },
});

// Compile model from schema
module.exports = new mongoose.model("user", userSchema);
