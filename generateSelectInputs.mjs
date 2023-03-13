import characteristics from "./characteristics.mjs";

//function creates the inputs for trait specific generation
export default function generateSelectInputs() {
  const selectInputsContainer = document.getElementById(
    "selectInputsContainer"
  );

  //define which select inputs are available

  const selectInputs = [
    {
      name: "selectRace",
      selectionItems: characteristics.race,
      labelText: "Race",
    },
    {
      name: "selectGender",
      selectionItems: characteristics.gender,
      labelText: "Gender",
    },
    {
      name: "selectAge",
      selectionItems: [
        "Child",
        "Young Adult",
        "Middle Aged",
        "Senior",
        "Wizened",
      ],
      labelText: "Age",
    },
    {
      name: "selectOccupation",
      selectionItems: Object.keys(characteristics.job),
      labelText: "Occupation",
      random: "y",
    },
    {
      name: "selectTraits",
      //slice 1 here just removes the "all category", redundant with random
      selectionItems: Object.keys(characteristics.characterTraits).slice(1),
      labelText: "Traits",
    },

    // traitsSelect,
    // desiresSelect,
  ];

  //append the select inputs and their options
  for (let i = 0; i < selectInputs.length; i++) {
    const label = document.createElement("label");
    label.innerHTML = selectInputs[i].labelText;
    const selectInput = document.createElement("select");
    selectInput.name = selectInputs[i].name;
    const defaultOption = document.createElement("option");
    defaultOption.value = "Random";
    defaultOption.innerHTML = "Random";
    selectInput.append(defaultOption);
    for (let j = 0; j < selectInputs[i].selectionItems.length; j++) {
      const option = document.createElement("option");
      option.value = selectInputs[i].selectionItems[j];
      //capitalize the first letter and remove underscores, helps as some of the keys in
      //characteristics are not formatted in a nice, displayable format
      let optionInnerHtml =
        selectInputs[i].selectionItems[j].charAt(0).toUpperCase() +
        selectInputs[i].selectionItems[j].slice(1);
      optionInnerHtml = optionInnerHtml.replace("_", " ");
      option.innerHTML = optionInnerHtml;
      selectInput.append(option);
    }
    selectInputsContainer.append(label);
    label.append(selectInput);
  }
}