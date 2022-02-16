const mongoose = require('mongoose')

const ProjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        required: true,
        default: 'In Process'
    }
})

module.exports = mongoose.model('Projects', ProjectSchema);