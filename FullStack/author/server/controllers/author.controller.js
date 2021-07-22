const { Author } = require('../models/author.model');
module.exports.index = (req, res) => {
    Author.find()
    .then(allDaUsers => res.json({ allDaUsers }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}
    // The method below is new
module.exports.createPerson = (request, response) => {
    const { name } = request.body;
    Author.create({
        name
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

module.exports.getAllPeople = (request, response) => {
    Author.find({})
        .then(persons => response.json(persons))
        .catch(err => response.json(err))
}

module.exports.getPerson = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}

module.exports.updatePerson = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPerson => response.json(updatedPerson))
        .catch(err => response.json(err))
}

module.exports.deletePerson = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}