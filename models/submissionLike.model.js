const mongoose = require('mongoose')
var Schema = mongoose.Schema;
mongoose.pluralize(null);

var submissionLikeSchema = new Schema({
    submission: {
        type: Schema.Types.ObjectId,
        ref:"submission"
    }, 
    author: {
        type: Schema.Types.ObjectId,
        ref:"user"
    }, 
});
// Compile model from schema
module.exports = new mongoose.model("submissionlike", submissionLikeSchema);
