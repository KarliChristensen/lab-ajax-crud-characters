const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async function (event) {
      charactersAPI
        .getFullList()
        .then((response) => {
          const characters = response.data;

          document.querySelector(".characters-container").innerHTML = "";

          characters.forEach((character) => {
            const characterInfo = `
          <div class="character-info">
          <div class="id">Id: <span>${character.id}</span></div>
          <div class="name">Name: <span>${character.name}</span></div>
          <div class="occupation">Occupation: <span>${character.occupation}</span></div>
          <div class="cartoon">Is a Cartoon?: <span>${character.cartoon}</span></div>
          <div class="weapon">Weapon: <span>${character.weapon}</span></div>
          </div>`;

            document.querySelector(".characters-container").innerHTML +=
              characterInfo;
          });
        })
        .catch((err) => console.log(err));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {
      event.preventDefault();
      const container = document.querySelector(".characters-container");
      container.innerHTML = "";
      const id = document.querySelector("input[name='character-id']").value;
      try {
        const response = await charactersAPI.getOneRegister(id);
        const character = response.data;
        const characterInfo = `
          <div class="character-info">
            <div class="id">Id: <span>${character.id}</span></div>
            <div class="name">Name: <span>${character.name}</span></div>
            <div class="occupation">Occupation: <span>${character.occupation}</span></div>
            <div class="cartoon">Is a Cartoon?: <span>${character.cartoon}</span></div>
            <div class="weapon">Weapon: <span>${character.weapon}</span></div>
          </div>`;
        container.innerHTML = characterInfo;
      } catch (err) {
        console.error(err);
      }
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", async function (event) {
      event.preventDefault();
      const container = document.querySelector(".characters-container");
      container.innerHTML = "";
      const id = document.querySelector(
        "input[name='character-id-delete']"
      ).value;
      try {
        await charactersAPI.deleteOneRegister(id);
      } catch (err) {
        console.error(err);
      }
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      const id = document.getElementById("idEdit").value;
      const name = document.getElementById("nameEdit").value;
      const occupation = document.getElementById("occupationEdit").value;
      const weapon = document.getElementById("weaponEdit").value;
      const cartoon = document.getElementById("checkbox").checked;
      console.log(id, name, occupation, cartoon, weapon);

      const character = {
        name,
        occupation,
        cartoon,
        weapon,
      };

      try {
        await charactersAPI.updateOneRegister(character, id);
        console.log("Character updated successfully.");
      } catch (err) {
        console.error(err);
      }
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      const name = document.getElementById("createName").value;
      const occupation = document.getElementById("createOccupation").value;
      const weapon = document.getElementById("createWeapon").value;
      const cartoon = document.getElementById("createCartoon").checked;
      const newCharacter = { name, occupation, weapon, cartoon };
      try {
        charactersAPI.createOneRegister(newCharacter);
      } catch (e) {
        console.log(e);
      }
    });
});
