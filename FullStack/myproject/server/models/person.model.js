const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    title: { type: String ,
        required: [
            true,
            "Title is required"
        ]
    },
    price: { type: String ,
        required: [
            true,
            "price is required"
        ] },
    description: { type: String,
        required: [
            true,
            "decription is required"
        ] }
}, { timestamps: true });
module.exports.Person = mongoose.model('Person', PersonSchema);