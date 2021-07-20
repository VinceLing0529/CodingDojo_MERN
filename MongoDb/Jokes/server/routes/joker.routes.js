const JokerController = require("../controllers/joker.controller");

module.exports = app => {
  app.get("/api/jokes/", JokerController.findAllUsers);
  app.get("/api/jokes/:id", JokerController.findOneSingleUser);
  app.put("/api/jokes/update/:id", JokerController.updateExistingUser);
  app.post("/api/jokes/new", JokerController.createNewUser);
  app.delete("/api/jokes/delete/:id", JokerController.deleteAnExistingUser);
};