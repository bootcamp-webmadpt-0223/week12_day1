const axios = require("axios");

// https://ih-crud-api.herokuapp.com
class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: "https://ih-crud-api.herokuapp.com"
    });
  }
  getAllCharacters() {
    return this.api.get("/characters");
  }
  getOneCharacter(id) {
    return this.api.get(`/characters/${id}`);
  }
  createCharacter(body) {
    return this.api.post(`/characters`, body);
  }
  updateCharacter(id, body) {
    return this.api.put(`/characters/${id}`, body);
  }
  deleteCharacter(id) {
    return this.api.delete(`/characters/${id}`);
  }
}

module.exports = ApiService;
