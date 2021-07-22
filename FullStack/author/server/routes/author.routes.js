const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.get('/api', AuthorController.index);
    app.post('/api/author', AuthorController.createPerson);
    app.get('/api/author', AuthorController.getAllPeople);
    app.get('/api/author/:id', AuthorController.getPerson);
    app.put('/api/author/:id', AuthorController.updatePerson);
    app.delete('/api/author/:id', AuthorController.deletePerson);

}