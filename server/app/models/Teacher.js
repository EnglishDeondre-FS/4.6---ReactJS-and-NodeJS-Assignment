const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({
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
    subject: {
      type: String,
      required: [true, "Please specify the subject they teach."]
    }
});

module.exports = mongoose.model("Teacher", teacherSchema);