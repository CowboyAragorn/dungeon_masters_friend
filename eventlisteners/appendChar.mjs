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

  function appendListToContainer(id, items) {
    const container = document.getElementById(id);
    for (let i = 0; i < items.length; i++) {
      let itemToAppend = document.createElement("p");
      itemToAppend.innerHTML = items[i];
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
          innerHTML: "Name",
        },
        {
          elementType: "p",
          id: "name",
          parent: "nameBox",
          innerHTML: char.firstName + " " + char.lastName,
        },
      ],
      [
        {
          elementType: "div",
          id: "physicalProfileContainer",
          parent: "tableContainer",
        },
        {
          elementType: "div",
          class: "physicalProfileBox",
          id: "raceBox",
          parent: "physicalProfileContainer",
        },
        {
          elementType: "h2",
          parent: "raceBox",
          innerHTML: "Race",
        },
        {
          elementType: "p",
          id: "race",
          parent: "raceBox",
          innerHTML: char.race,
        },
        {
          elementType: "div",
          class: "physicalProfileBox",
          id: "genderBox",
          parent: "physicalProfileContainer",
        },
        {
          elementType: "h2",
          parent: "genderBox",
          innerHTML: "Gender",
        },
        {
          elementType: "p",
          id: "gender",
          parent: "genderBox",
          innerHTML: char.gender,
        },
        {
          elementType: "div",
          class: "physicalProfileBox",
          id: "ageBox",
          parent: "physicalProfileContainer",
        },
        {
          elementType: "h2",
          parent: "ageBox",
          innerHTML: "Age",
        },
        {
          elementType: "p",
          id: "age",
          parent: "ageBox",
          innerHTML: char.age,
        },
      ],
      [
        {
          elementType: "div",
          id: "occupationsMainContainer",
          parent: "tableContainer",
        },
        {
          elementType: "div",
          class: ["borderlessContainer", "middlePart", "column"],
          id: "occupationsBox",
          parent: "occupationsMainContainer",
        },
        {
          elementType: "h2",
          innerHTML: "Occupations",
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
          parent: "occupationsMainContainer",
        },
        {
          elementType: "h2",
          innerHTML: "Traits",
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
          innerHTML: "Desires",
        },
        {
          elementType: "p",
          id: "desires",
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
  function appendToPage(char) {
    appendCategories(char);

    // const nameElement = document.getElementById("name");
    // nameElement.innerHTML = char.firstName + " " + char.lastName;

    // const raceElement = document.getElementById("race");
    // raceElement.innerHTML = char.race;
    // const genderElement = document.getElementById("gender");
    // genderElement.innerHTML = char.gender;
    // const ageElement = document.getElementById("age");
    // ageElement.innerHTML = char.age + " years old";

    // const occupationsContainer = document.getElementById(
    //   "occupationsContainer"
    // );
    // clearContainer(occupationsContainer);
    // appendListToContainer(occupationsContainer, char.job);

    // const traitsContainer = document.getElementById("traitsContainer");
    // clearContainer(traitsContainer);
    // appendListToContainer(traitsContainer, char.traits);

    // const desiresElement = document.getElementById("desires");
    // desiresElement.innerHTML = char.desires;
  }

  const randRace = selectRandChar();
  const char = new randRace();
  appendToPage(char);
  console.log(char);
}

export default appendChar;
