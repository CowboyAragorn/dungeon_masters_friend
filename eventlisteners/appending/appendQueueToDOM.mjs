import { charQueue } from "../addToCharQueue.mjs";
import appendCharFromQueue from "./appendCharFromQueue.mjs";

export default function appendQueueToDOM() {
  const queueInstructions = document.getElementById("queueInstructions");
  queueInstructions.classList.remove("invisible");
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
      const queueContainerCurrentChild = queueContainerChildren[j].children[1];
      if (queueContainerCurrentChild.innerHTML == innerHTMLIndentifier) {
        j++;
        continue;
      }
    }
    j++;

    const queueBox = document.createElement("div");
    queueBox.classList.add("queueBox");
    queueContainer.prepend(queueBox);

    const numberDisplay = document.createElement("p");
    numberDisplay.classList.add("queueNumber");
    queueBox.append(numberDisplay);

    const charBtn = document.createElement("button");
    charBtn.id = charQueue[i - 1].id;
    charBtn.classList.add("charBtn");
    charBtn.innerHTML = innerHTMLIndentifier;
    queueBox.append(charBtn);
    charBtn.addEventListener("click", appendCharFromQueue);
    numberCharQueue();
  }
}

function numberCharQueue() {
  const queueContainer = document.getElementById("queueContainer");
  const queueContainerChildren = queueContainer.childNodes;
  for (let i = 0; i < charQueue.length; i++) {
    const queueContainerCurrentChild = queueContainerChildren[i].children[0];
    queueContainerCurrentChild.innerHTML = i + 1;
  }
}
