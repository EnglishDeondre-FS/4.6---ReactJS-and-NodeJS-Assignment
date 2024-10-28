const mongoose = require('mongoose');

const schoolSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "You are required to name a school"],
        trim: true,
        maxlength: [50, "Your name is too long"]
    },
    startDate: {
      type: Date,
      required: [true, "Please add start date"]
    },
    studentCount: {
      type: Number,
      required: [true, "Please submit the student count"]
    },
    description: {
        type: String,
        required: [true, "Please add a description"],
        maxlength: [500, "Description cannot be more then 500 characters"]
    },
});

module.exports = mongoose.model("School", schoolSchema);