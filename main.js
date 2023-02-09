import characteristics from "./characteristics.mjs";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function genTraits() {
  let randArr = [];
  let personalityArr = [];

  for (let i = 0; i < getRandomIntInclusive(3, 5); i++) {
    let num = getRandomIntInclusive(
      0,
      characteristics.temperament.feelings.length - 1
    );
    //don't want them to double up on personality traits
    if (num in randArr) {
      continue;
    }
    randArr.push(num);
  }

  for (let i = 0; i < randArr.length; i++) {
    personalityArr.push(characteristics.temperament.feelings[randArr[i]]);
  }
  return personalityArr;
}

function genJob() {
  let categories = [];
  let jobs = [];

  //pick 1-3 random categories of job
  for (let i = 0; i < getRandomIntInclusive(1, 3); i++) {
    let num = getRandomIntInclusive(
      0,
      Object.keys(characteristics.job).length - 1
    );
    categories.push(Object.keys(characteristics.job)[num]);
  }
  //choose job from the category
  for (let i = 0; i < categories.length; i++) {
    let current_category = characteristics.job[categories[i]];
    let jobNum = getRandomIntInclusive(0, current_category.length - 1);
    //randomize proficiency
    const proficiencyNum = getRandomIntInclusive(0, 100);
    let proficiency;
    if (proficiencyNum == 100) {
      proficiency = "Grandmaster";
    } else if (proficiencyNum > 95) {
      proficiency = "Legendary";
    } else if (proficiencyNum > 85) {
      proficiency = "Master";
    } else if (proficiencyNum > 65) {
      proficiency = "Skilled";
    } else if (proficiencyNum > 50) {
      proficiency = "Proficient";
    } else if (proficiencyNum > 25) {
      proficiency = "Journeyman";
    } else {
      proficiency = "Novice";
    }

    jobs.push(proficiency + " " + current_category[jobNum]);
  }
  return jobs;
}

console.log(genTraits());
console.log(genJob());
