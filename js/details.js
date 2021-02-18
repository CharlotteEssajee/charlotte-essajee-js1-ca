const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (id === null) {
  location.href = "/";
}

const url = "https://thronesapi.com/api/v2/Characters/";
const proxy = "https://noroffcors.herokuapp.com/";
const corsFix1 = proxy + url + id;

const idContainer = document.querySelector(".id");
const detailContainer = document.querySelector(".details");

idContainer.innerHTML = "";

async function getId() {
  try {
    const response = await fetch(corsFix1);
    const details = await response.json();

    console.log(details);
    createHtml(details);
  } catch {
    console.log(error);
    detailContainer.innerHTML = error;
  }
}

getId();

function createHTML(details) {
  detailContainer.innerHTML = `<div class ="card">
                                <img src="${details.image}" alt="${details.fullName}" class="characterImg"/>
                                <h2>${details.fullName}</h2>
                                <p class="title"> Title: ${details.title}</p>
                                <p class="family"> Family: ${details.family}</p> 
                              </div>`;
}
