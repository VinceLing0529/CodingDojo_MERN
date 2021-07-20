const mongoose = require("mongoose");

const JokerSchema = new mongoose.Schema({
	setup: {
		type: String,
		required: [true, "{PATH} is required."],
		minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
	  },
	  punchline: {
		type: String,
		required: [true, "{PATH} is required."],
		minlength: [6, "{PATH} must be at least {MINLENGTH} characters."],
	  },

});

const Joker = mongoose.model("Joker", JokerSchema);

module.exports = Joker;