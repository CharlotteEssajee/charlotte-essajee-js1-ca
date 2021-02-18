const url = "https://thronesapi.com/api/v2/Characters";
const proxy = "https://noroffcors.herokuapp.com/";
const corsFix = proxy + url;
const resultsContainer = document.querySelector(".results");

async function getCharacters() {
  try {
    const response = await fetch(corsFix);
    const json = await response.json();

    const character = json;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < character.length; i++) {
      if (i === 12) {
        break;
      }

      const image = character[i].imageUrl;
      const name = character[i].fullName;
      const title = character[i].title;
      const family = character[i].family;
      const id = character[i].id;

      resultsContainer.innerHTML += `<a href="details.html?id=${id}" class="card">
                                        <img src="${image}" alt="${name}" class="characterImg"/>
                                        <h2>${name}</h2>
                                        <p class="title"> Title: ${title}</p>
                                        <p class="family"> Family: ${family}</p> 
                                      </a>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = error;
  }
}

getCharacters();
