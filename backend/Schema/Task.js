const mongoose = require('mongoose');
const taskSchema =  mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        required: true,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
})

module.exports = mongoose.model('Task', taskSchema);