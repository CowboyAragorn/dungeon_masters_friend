import { charQueue } from "./addToCharQueue.mjs";

export default function appendCharStack() {
  const queueContainer = document.getElementById("queueContainer");
  let j = 0;
  for (let i = charQueue.length; i > 0; i--) {
    const queueContainerChildren = queueContainer.childNodes;
    const innerHTMLIndentifier =
      charQueue[i - 1].firstName +
      " " +
      charQueue[i - 1].lastName +
      " - " +
      charQueue[i - 1].race;
    //if the node exists, and if its name is the same, no need to append again
    if (queueContainerChildren[j]) {
      if (queueContainerChildren[j].innerHTML == innerHTMLIndentifier) {
        j++;
        continue;
      }
    }
    j++;
    const charBtn = document.createElement("button");
    charBtn.classList.add("charBtn");
    charBtn.innerHTML = innerHTMLIndentifier;
    queueContainer.prepend(charBtn);
  }
}
