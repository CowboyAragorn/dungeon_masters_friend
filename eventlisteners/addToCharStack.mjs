//initialize charstack as empty
let charStack = [];

function addToCharacterStack(char) {
  if (charStack.length == 10) {
    charStack = charStack.slice(1);
    removeFirstDisplayedChild();
  }
  charStack = [...charStack, char];
  console.log(charStack.length);
  const firstChild = stackContainer.firstElementChild;
  console.log("firstchild");
  console.log(firstChild);
  return charStack;
}

//when reaching 10, delete first item from DOM
function removeFirstDisplayedChild() {
  const stackContainer = document.getElementById("stackContainer");
  const firstChild = stackContainer.firstElementChild;
  console.log(firstChild);
  firstChild.remove();
}

export { charStack, addToCharacterStack };
