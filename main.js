// import {
//   Character,
//   Human,
//   Dwarf,
//   Elf,
//   HalfElf,
//   Halfling,
// } from "./characterObjects.mjs";
import { Character, raceClasses } from "./characterObjects.mjs";
import appendChar from "./eventlisteners/appendChar.mjs";

const newGuy = new Character();

console.log(newGuy.name);
console.log(newGuy.age + " year old " + newGuy.race + " " + newGuy.gender);
console.log("they are: " + newGuy.traits);
console.log("Profession(s):" + newGuy.job);
console.log(newGuy.name + " desires " + newGuy.desires);

const randCharBtn = document.getElementById("randCharBtn");
randCharBtn.addEventListener("click", appendChar);

const newHuman = new raceClasses.Dwarf();
console.log(newHuman);
console.log(newHuman.age);
console.log(Object.keys(raceClasses));

// console.log("Human");
// const newHuman = new Human();
// console.log(newHuman);

// console.log("Elf");
// const newElf = new Elf();
// console.log(newElf);
// console.log(newElf.age);
