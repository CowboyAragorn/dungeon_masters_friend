import { Character, raceClasses } from "../characterObjects.mjs";
import getRandomIntInclusive from "../utils/getRandomIntInclusive.mjs";

function appendChar() {
  function selectRandChar() {
    const arrOfRaces = Object.keys(raceClasses);
    const randNum = getRandomIntInclusive(0, arrOfRaces.length - 1);
    const randRace = arrOfRaces[randNum];
    return raceClasses[randRace];
  }

  function clearContainer(container) {
    while (container.firstChild) {
      container.firstChild.remove();
    }
  }

  function appendListToContainer(container, items) {
    for (let i = 0; i < items.length; i++) {
      let itemToAppend = document.createElement("p");
      itemToAppend.innerHTML = items[i];
      container.append(itemToAppend);
    }
  }
  function appendToPage(char) {
    const nameElement = document.getElementById("name");
    nameElement.innerHTML = char.firstName + " " + char.lastName;

    const raceElement = document.getElementById("race");
    raceElement.innerHTML = char.race;
    const genderElement = document.getElementById("gender");
    genderElement.innerHTML = char.gender;
    const ageElement = document.getElementById("age");
    ageElement.innerHTML = char.age + " years old";

    const occupationsContainer = document.getElementById(
      "occupationsContainer"
    );
    clearContainer(occupationsContainer);
    appendListToContainer(occupationsContainer, char.job);

    const traitsContainer = document.getElementById("traitsContainer");
    clearContainer(traitsContainer);
    appendListToContainer(traitsContainer, char.traits);

    const desiresElement = document.getElementById("desires");
    desiresElement.innerHTML = char.desires;
  }

  const randRace = selectRandChar();
  const char = new randRace();
  appendToPage(char);
  console.log(char);
}

export default appendChar;
