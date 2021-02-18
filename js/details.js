const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (id === null) {
  location.href = "/";
}

const url = "http://hp-api.herokuapp.com/api/characters/" + id;

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
  getDetails.innerHTML = `<h1 class="headline">Name: ${details.name}<h1>
                            <div class="born">Born: ${details.born}<div>
                            <div class="playedBy">Actress: ${details.playedBy}<div>`;
}
