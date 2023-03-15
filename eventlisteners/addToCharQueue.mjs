//initialize charstack as empty
let charQueue = [];

function addToCharQueue(char) {
  if (charQueue.length == 10) {
    charQueue = charQueue.slice(1);
    removeFirstInQueue();
  }
  charQueue = [...charQueue, char];
  return charQueue;
}

//when reaching 10, delete first item from DOM
function removeFirstInQueue() {
  const queueContainer = document.getElementById("queueContainer");
  const lastChild = queueContainer.lastElementChild;
  lastChild.remove();
}

export { charQueue, addToCharQueue };
