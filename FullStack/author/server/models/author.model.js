const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: { type: String ,
        required: [
            true,
            "Name is required"
            
        ],
        min: [3, 'Minimum 3 letters']
    }
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);