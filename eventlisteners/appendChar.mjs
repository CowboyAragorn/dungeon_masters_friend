import { Character, raceClasses } from "../characterObjects.mjs";
import getRandomIntInclusive from "../utils/getRandomIntInclusive.mjs";
import { addToCharQueue, charQueue } from "./addToCharQueue.mjs";
import appendCharQueue from "./appendCharQueue.mjs";

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

  function appendCategories(char) {
    //array of array of appendable objects, saves having to type the create element for everything
    //array of array is purely for convenience of seeing each nexted row in html easier
    //speed should run the same as it is still touching everything n times

    const categoriesToAppend = [
      [
        {
          elementType: "div",
          id: "nameBox",
          parent: "tableContainer",
        },
        {
          elementType: "h2",
          parent: "nameBox",
          class: "descriptionHeader",
          innerHTML: "Name",
        },
        {
          elementType: "p",
          id: "name",
          class: "generatedP",
          parent: "nameBox",
          innerHTML: char.firstName + " " + char.lastName,
        },
      ],
      [
        {
          elementType: "div",
          class: "physicalProfileBox",
          id: "raceBox",
          parent: "tableContainer",
        },
        {
          elementType: "h2",
          parent: "raceBox",
          class: "descriptionHeader",
          innerHTML: "Race",
        },
        {
          elementType: "p",
          id: "race",
          class: "generatedP",
          parent: "raceBox",
          innerHTML: char.race,
        },
        {
          elementType: "div",
          class: "physicalProfileBox",
          id: "genderBox",
          parent: "tableContainer",
        },
        {
          elementType: "h2",
          parent: "genderBox",
          class: "descriptionHeader",
          innerHTML: "Gender",
        },
        {
          elementType: "p",
          id: "gender",
          class: "generatedP",
          parent: "genderBox",
          innerHTML: char.gender,
        },
        {
          elementType: "div",
          class: "physicalProfileBox",
          id: "ageBox",
          parent: "tableContainer",
        },
        {
          elementType: "h2",
          parent: "ageBox",
          class: "descriptionHeader",
          innerHTML: "Age",
        },
        {
          elementType: "p",
          id: "age",
          class: "generatedP",
          parent: "ageBox",
          innerHTML: char.age,
        },
      ],
      [
        {
          elementType: "div",
          class: ["borderlessContainer", "middlePart", "column"],
          id: "occupationsBox",
          parent: "tableContainer",
        },
        {
          elementType: "h2",
          innerHTML: "Occupations",
          class: "descriptionHeader",
          parent: "occupationsBox",
        },
        {
          elementType: "div",
          id: "occupationsContainer",
          parent: "occupationsBox",
          appendListToContainerParameters: ["occupationsContainer", char.job],
        },
        {
          elementType: "div",
          class: ["borderlessContainer", "column"],
          id: "traitsBox",
          parent: "tableContainer",
        },
        {
          elementType: "h2",
          innerHTML: "Traits",
          class: "descriptionHeader",
          parent: "traitsBox",
        },
        {
          elementType: "div",
          id: "traitsContainer",
          parent: "traitsBox",
          appendListToContainerParameters: ["traitsContainer", char.traits],
        },
      ],
      [
        {
          elementType: "div",
          id: "desiresBox",
          class: "column",
          parent: "tableContainer",
        },
        {
          elementType: "h2",
          parent: "desiresBox",
          class: "descriptionHeader",
          innerHTML: "Desires",
        },
        {
          elementType: "p",
          id: "desires",
          class: "generatedP",
          parent: "desiresBox",
          innerHTML: char.desires,
        },
      ],
    ];

    //clear the table
    const tableContainer = document.getElementById("tableContainer");
    while (tableContainer.firstChild) {
      tableContainer.firstChild.remove();
    }
    tableContainer.classList.add("tableContainerBorders");
    //goes through and appends the items located in above object to page
    for (let i = 0; i < categoriesToAppend.length; i++) {
      for (let j = 0; j < categoriesToAppend[i].length; j++) {
        const el = document.createElement(categoriesToAppend[i][j].elementType);
        if (categoriesToAppend[i][j].id) {
          el.id = categoriesToAppend[i][j].id;
        }
        if (categoriesToAppend[i][j].class) {
          //in the event you have to add multiple classes, I add them as an array to the key
          if (Array.isArray(categoriesToAppend[i][j].class)) {
            for (let k = 0; k < categoriesToAppend[i][j].class.length; k++) {
              el.classList.add(categoriesToAppend[i][j].class[k]);
            }
          } else {
            el.classList.add(categoriesToAppend[i][j].class);
          }
        }
        if (categoriesToAppend[i][j].innerHTML) {
          el.innerHTML = categoriesToAppend[i][j].innerHTML;
        }
        const parent = document.getElementById(categoriesToAppend[i][j].parent);
        parent.append(el);
        //This is for longer sublists, like occupations or traits
        if (categoriesToAppend[i][j].appendListToContainerParameters) {
          appendListToContainer(
            categoriesToAppend[i][j].appendListToContainerParameters[0],
            categoriesToAppend[i][j].appendListToContainerParameters[1]
          );
        }
      }
    }
  }

  //race is currently being determined here, not sure if that is the best, rolling for now 3-13

  const randRace = selectRandChar();
  const char = new randRace();
  addToCharQueue(char);
  console.log("charstack");
  console.log(charQueue);
  appendCategories(char);
  appendCharQueue();
  console.log(char);
}

export default appendChar;
