class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList(characters) {
    const getFullList = await axios.get(`${this.BASE_URL}/${characters}`);
    return getFullList.data;
  }

  async getOneRegister(characters, id) {
    const getOneRegister = await axios.get(
      `${this.BASE_URL}/${characters}/${id}`
    );
    return getOneRegister.data;
  }

  async createOneRegister(characters, newCharacter) {
    const createOneRegister = await axios.post(
      `${this.BASE_URL}/${characters}`,
      newCharacter
    );
    return createOneRegister.data;
  }

  async updateOneRegister(characters, id) {
    const updateOneRegister = await axios.put(
      `${this.BASE_URL}/${characters}/${id}`
    );
    return updateOneRegister.data;
  }

  async deleteOneRegister(characters, id) {
    const deleteOneRegister = await axios.delete(
      `${this.BASE_URL}/${characters}/${id}`
    );
    return deleteOneRegister.data;
  }
}
