const Joker = require("../models/joker.model");

module.exports.findAllUsers = (req, res) => {
  Joker.find()
    .then(allDaUsers => res.json({ jokes: allDaUsers }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleUser = (req, res) => {
	Joker.findOne({ _id: req.params.id })
		.then(oneSingleUser => res.json({ joke: oneSingleUser }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewUser = (req, res) => {
  Joker.create(req.body)
    .then(newlyCreatedUser => res.json({ joke: newlyCreatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingUser = (req, res) => {
  Joker.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedUser => res.json({ joke: updatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingUser = (req, res) => {
  Joker.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
