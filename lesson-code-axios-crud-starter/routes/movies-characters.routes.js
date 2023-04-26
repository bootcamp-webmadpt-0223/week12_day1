const router = require("express").Router();
const ApiService = require("../services/api.service");
const apiService = new ApiService();

// List all the characters from the API.
router.get("/list", (req, res) => {
  apiService.getAllCharacters().then(response => {
    const characters = response.data;
    res.render("pages/characters-list", { characters });
  });
});

// Render a form to create a new character.
router.get("/create", (req, res) => {
  res.render("pages/new-character-form");
});

// Submit info to create a new character.
router.post("/create", (req, res) => {
  apiService.createCharacter(req.body).then(response => {
    console.log(response.data);
    res.redirect("/movies-characters/list");
  });
});

// Render a form to edit a character.
router.get("/edit/:id", (req, res) => {
  apiService.getOneCharacter(req.params.id).then(response => {
    res.render("pages/edit-character-form", { character: response.data });
  });
});

// Submit info to edit a character with a matching id.
router.post("/edit/:id", (req, res) => {
  apiService.updateCharacter(req.params.id, req.body).then(() => {
    res.redirect("/movies-characters/list");
  });
});

// Delete a character with a matching id.
router.get("/delete/:id", (req, res) => {
  apiService.deleteCharacter(req.params.id).then(response => {
    console.log(response.data);
    res.redirect("/movies-characters/list");
  });
});

module.exports = router;
