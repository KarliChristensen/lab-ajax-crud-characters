class APIHandler {
  constructor(baseUrl) {
    this.api = axios.create({
      baseURL: baseUrl,
    });
  }

  getFullList(characters) {
    return this.api.get("/characters")
  }

  getOneRegister(characters, id) {
    return this.api.get(`/characters/${id}`);
  }

  createOneRegister(characters, newCharacter) {
    return this.api.post("/characters/", newCharacter);
  }

  updateOneRegister(characters, id) {
    return this.api.put(`/characters/${id}`, characters);
  }

  deleteOneRegister(characters, id) {
    return this.api.delete(`/characters/${id}`);
  }
}
