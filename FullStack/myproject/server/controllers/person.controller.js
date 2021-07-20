const { Person } = require('../models/person.model');
module.exports.index = (req, res) => {
    Person.find()
    .then(allDaUsers => res.json({ allDaUsers }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}
    // The method below is new
module.exports.createPerson = (request, response) => {
    const { title, price,description } = request.body;
    Person.create({
        title,
        price,
        description
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}