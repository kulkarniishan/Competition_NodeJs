const mongoose = require('mongoose')
var Schema = mongoose.Schema;
mongoose.pluralize(null);

var competitionSchema = new Schema({
    name: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    author: {
        type: Schema.Types.ObjectId,
        ref:"user"
    },
});
// Compile model from schema
module.exports = new mongoose.model("competition", competitionSchema);
