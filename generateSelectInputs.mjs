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
    // ageSelect,
    // occupationsSelect,
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
      option.innerHTML = selectInputs[i].selectionItems[j];
      selectInput.append(option);
    }
    selectInputsContainer.append(label);
    label.append(selectInput);
  }
}
