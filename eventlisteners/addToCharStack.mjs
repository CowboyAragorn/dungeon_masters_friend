//initialize charstack as empty
let charStack = [];

function addToCharacterStack(char) {
  charStack = [...charStack, char];
  return charStack;
}

export { charStack, addToCharacterStack };
