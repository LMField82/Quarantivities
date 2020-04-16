const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const activitySchema = new Schema ({
    title: {
        type: String,
        required: "",
        trim: true
    },
    description: {
        type: String,
        trim: true,
    },
    href: {
        type: String,
        required: "Enter the url of the activity.",
        trim: true
    },
    likes: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        ref: "Category",
        required: true
    }
});



const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;