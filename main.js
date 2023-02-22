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

// const newGuy = new raceClasses.Halfling();
// console.log(newGuy);
//console.log(newGuy.name);
// console.log(newGuy.age + " year old " + newGuy.race + " " + newGuy.gender);
// console.log("they are: " + newGuy.traits);
// console.log("Profession(s):" + newGuy.job);
// console.log(newGuy.name + " desires " + newGuy.desires);

const randCharBtn = document.getElementById("randCharBtn");
randCharBtn.addEventListener("click", appendChar);
