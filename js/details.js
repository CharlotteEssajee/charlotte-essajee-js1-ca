const url = "https://anapioficeandfire.com/api/characters/583";
const proxy = "https://noroffcors.herokuapp.com/";
const corsFix = proxy + url;

const getDetails = document.querySelector(".details");

async function getCharacter() {
  try {
    const response = await fetch(corsFix);
    const details = await response.json();

    createHTML(details);
  } catch (error) {
    console.log(error);
    getDetails.innerHTML = error;
  } finally {
    console.log("this code will run no matter what");
  }
}

getCharacter();

function createHTML(details) {
  getDetails.innerHTML = `<h1 class="headline">Name: ${details.name}<h1>
                            <div class="born">Born: ${details.born}<div>
                            <div class="playedBy">Actress: ${details.playedBy}<div>`;
}
