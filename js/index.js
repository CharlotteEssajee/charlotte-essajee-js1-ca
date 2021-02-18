const url = "http://hp-api.herokuapp.com/api/characters";
const resultsContainer = document.querySelector(".results");

async function getCharacters() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    const character = json;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < character.length; i++) {
      if (i === 12) {
        break;
      }

      const image = character[i].image;
      const name = character[i].name;
      const actor = character[i].actor;
      const house = character[i].house;

      resultsContainer.innerHTML += `<div class ="card">
                                        <img src="${image}" alt="${name}" class="characterImg"/>
                                        <h2>${name}</h2>
                                        <p class="house"> House: ${house}</p> 
                                      </div>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = error;
  }
}

getCharacters();

const select = document.querySelector(".card");
const characterImg = document.querySelector(".characterImg");

select.addEventListener("change", getDetails);

function getDetails(event) {
  console.log(event.target.value);

  const amount = event.target.value;

  characterImg.innerHTML = "";

  for (let i = 1; i <= amount; i++) {
    characterImg.innerHTML += `<a href="details.html?id=${i}">${i}</a>`;
  }
}
