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
  const nameLine = document.createElement("p");
  nameLine.innerHTML =
    char.name +
    " is a " +
    char.age +
    " year old " +
    char.gender +
    " " +
    char.race;
  charContainer.append(nameLine);

  const jobString = createStrFromList(char, "job");
  const jobLine = document.createElement("p");
  jobLine.innerHTML = char.pronoun.subject + " is a " + jobString;
  charContainer.append(jobLine);

  const traitsString = createStrFromList(char, "traits");
  const traitsLine = document.createElement("p");
  traitsLine.innerHTML = char.pronoun.subject + " is " + traitsString;
  charContainer.append(traitsLine);

  const desireLine = document.createElement("P");
  desireLine.innerHTML = char.pronoun.subject + " desires " + char.desires;
  charContainer.append(desireLine);
}

//createStrFromList takes in the character and an array to generate a string
//of that array for format "is a x, y, and z"
function createStrFromList(char, list) {
  let newStr = "";
  for (let i = 0; i < char[list].length; i++) {
    if (char[list].length == 1) {
      newStr = char[list][i] + ".";
      break;
    }
    if (i == char[list].length - 1) {
      newStr += "and " + char[list][i] + ".";
      break;
    }
    newStr += char[list][i] + ", ";
  }
  return newStr;
}

function selectRandChar() {
  const arrOfRaces = Object.keys(raceClasses);
  const randNum = getRandomIntInclusive(0, arrOfRaces.length - 1);
  const randRace = arrOfRaces[randNum];
  return raceClasses[randRace];
}

export default appendChar;
