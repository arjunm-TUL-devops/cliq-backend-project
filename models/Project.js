const mongoose = require('mongoose')

const ProjectSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please add a name for the user"]
    },
    work: {
        type: String,
        required: [true, "Please mention your task"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'In Process',
        enum: ["In Process", "Completed"]
    }
})

module.exports = mongoose.model('Projects', ProjectSchema);