//initialize charstack as empty
let charQueue = [];

function addToCharQueue(char) {
  if (charQueue.length == 10) {
    charQueue = charQueue.slice(1);
    removeFirstDisplayedChild();
  }
  charQueue = [...charQueue, char];
  console.log(charQueue.length);
  const firstChild = queueContainer.firstElementChild;
  console.log("firstchild");
  console.log(firstChild);
  return charQueue;
}

//when reaching 10, delete first item from DOM
function removeFirstDisplayedChild() {
  const queueContainer = document.getElementById("queueContainer");
  const firstChild = queueContainer.firstElementChild;
  console.log(firstChild);
  firstChild.remove();
}

export { charQueue, addToCharQueue };
