import { charStack } from "./addToCharStack.mjs";

export default function appendCharStack() {
  const stackContainer = document.getElementById("stackContainer");
  for (let i = 0; i < charStack.length; i++) {
    const stackContainerChildren = stackContainer.childNodes;
    const innerHTMLIndentifier =
      charStack[i].firstName +
      " " +
      charStack[i].lastName +
      " - " +
      charStack[i].race;
    //if the node exists, and if its name is the same, no need to append again
    if (stackContainerChildren[i]) {
      if (stackContainerChildren[i].innerHTML == innerHTMLIndentifier) {
        continue;
      }
    }
    const charBtn = document.createElement("button");
    charBtn.classList.add("charBtn");
    charBtn.innerHTML = innerHTMLIndentifier;
    stackContainer.append(charBtn);
  }
}
