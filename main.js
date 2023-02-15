import {
  Character,
  Human,
  Dwarf,
  Elf,
  HalfElf,
  Halfling,
} from "./characterObjects.mjs";

const newGuy = new Character();

console.log(newGuy.name);
console.log(newGuy.age + " year old " + newGuy.race + " " + newGuy.gender);
console.log("they are: " + newGuy.traits);
console.log("Profession(s):" + newGuy.job);
console.log(newGuy.name + " desires " + newGuy.desires);

console.log("Human");
const newHuman = new Human();
console.log(newHuman);

console.log("Elf");
const newElf = new Elf();
console.log(newElf);
console.log(newElf.age);
/*
//console.log(genRaceEvenOdds());
console.log(genRaceEvenOdds() + " " + genGender());
console.log(genTraits());
console.log(genJob());
*/
