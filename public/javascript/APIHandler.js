class APIHandler {
  constructor(baseUrl) {
    this.api = axios.create({
      baseURL: baseUrl,
    });
  }

  getFullList() {
    return this.api.get("/characters")
  }

  getOneRegister(id) {
    return this.api.get(`/characters/${id}`);
  }

  createOneRegister(newCharacter) {
    return this.api.post("/characters/", newCharacter);
  }

  updateOneRegister(characters, id) {
    return this.api.put(`/characters/${id}`, characters);
  }

  deleteOneRegister(id) {
    return this.api.delete(`/characters/${id}`);
  }
}
