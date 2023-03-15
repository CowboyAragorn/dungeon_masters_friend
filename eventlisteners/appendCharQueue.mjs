import { charQueue } from "./addToCharQueue.mjs";

export default function appendCharStack() {
  const queueContainer = document.getElementById("queueContainer");
  for (let i = 0; i < charQueue.length; i++) {
    const queueContainerChildren = queueContainer.childNodes;
    const innerHTMLIndentifier =
      charQueue[i].firstName +
      " " +
      charQueue[i].lastName +
      " - " +
      charQueue[i].race;
    //if the node exists, and if its name is the same, no need to append again
    if (queueContainerChildren[i]) {
      if (queueContainerChildren[i].innerHTML == innerHTMLIndentifier) {
        continue;
      }
    }
    const charBtn = document.createElement("button");
    charBtn.classList.add("charBtn");
    charBtn.innerHTML = innerHTMLIndentifier;
    queueContainer.append(charBtn);
  }
}
