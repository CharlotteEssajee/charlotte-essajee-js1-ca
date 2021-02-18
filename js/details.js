const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (id === null) {
  location.href = "/";
}

const url = "https://thronesapi.com/api/v2/Characters/";
const proxy = "https://noroffcors.herokuapp.com/";
const corsFix = proxy + url + id;

const idContainer = document.querySelector(".id");
const detailContainer = document.querySelector(".details");

idContainer.innerHTML = id;

async function getId() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);
  } catch {
    console.log(error);
    detailContainer.innerHTML = error;
  }
}

getId();

function createHTML(details) {
  getDetails.innerHTML = `<div class ="card">
                            <img src="${image}" alt="${name}" class="characterImg"/>
                            <h2>${name}</h2>
                            <p class="title"> Title: ${title}</p>
                            <p class="family"> Family: ${family}</p> 
                          </div>`;
}
