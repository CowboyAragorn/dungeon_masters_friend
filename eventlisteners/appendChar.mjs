import { Character, raceClasses } from "../characterObjects.mjs";
import getRandomIntInclusive from "../utils/getRandomIntInclusive.mjs";
import appendCategories from "./appending/appendCategories.mjs";
import { addToCharQueue, charQueue } from "./addToCharQueue.mjs";
import appendCharQueue from "./appending/appendCharQueue.mjs";

function appendChar() {
  function selectRandChar() {
    const selectRace = document.getElementById("selectRace");

    if (selectRace.value == "Random") {
      const arrOfRaces = Object.keys(raceClasses);
      const randNum = getRandomIntInclusive(0, arrOfRaces.length - 1);
      const randRace = arrOfRaces[randNum];
      return raceClasses[randRace];
    } else {
      return raceClasses[selectRace.value];
    }
  }

  function appendListToContainer(id, items) {
    const container = document.getElementById(id);
    for (let i = 0; i < items.length; i++) {
      let itemToAppend = document.createElement("p");
      itemToAppend.innerHTML = items[i];
      itemToAppend.classList.add("generatedP");
      container.append(itemToAppend);
    }
  }
  //race is currently being determined here, not sure if that is the best, rolling for now 3-13

  const randRace = selectRandChar();
  const char = new randRace();
  tableContainer.classList.remove("invisible");
  tableContainer.classList.add("grid");
  addToCharQueue(char);
  appendCategories(char);
  appendCharQueue();
  console.log(char);
}

export default appendChar;
