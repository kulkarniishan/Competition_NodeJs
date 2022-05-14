const mongoose = require('mongoose')
var Schema = mongoose.Schema;
mongoose.pluralize(null);

var submissionSchema = new Schema({
    image: {
        type: String,
        default: "https://res.cloudinary.com/practicaldev/image/fetch/s--jIjY95PE--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://images.unsplash.com/photo-1529675641475-78780f1fd4b0%3Fixlib%3Drb-1.2.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26auto%3Dformat%26fit%3Dcrop%26w%3D1350%26q%3D80"
    },
    author: {
        type: Schema.Types.ObjectId,
        ref:"user"
    },
    competition: {
        type: String,
        default: ""
    },
});
// Compile model from schema
module.exports = new mongoose.model("submission", submissionSchema);
