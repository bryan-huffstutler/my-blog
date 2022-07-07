const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add a title"],
        unique: true,
        maxlength: [40, "Title must be less than 40 characters"]
    },
    description: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    isFeatured: {
        type: Boolean,
        default: false
    }, 
    image: {
        type: String
    }
})

module.exports = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);