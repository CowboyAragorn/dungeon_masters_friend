import { Character, raceClasses } from "../characterObjects.mjs";
import getRandomIntInclusive from "../utils/getRandomIntInclusive.mjs";

function appendChar() {
  const charContainer = document.getElementById("charContainer");
  const randRace = selectRandChar();
  const char = new randRace();
  console.log(char);
  //rest the list to show new char if button is clicked again
  while (charContainer.firstChild) {
    charContainer.firstChild.remove();
  }
  const name = document.createElement("p");
  name.innerHTML = char.name;
  charContainer.append(name);
}

function selectRandChar() {
  const arrOfRaces = Object.keys(raceClasses);
  const randNum = getRandomIntInclusive(0, arrOfRaces.length - 1);
  const randRace = arrOfRaces[randNum];
  return raceClasses[randRace];
}

export default appendChar;
