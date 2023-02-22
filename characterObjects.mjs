import getRandomIntInclusive from "./utils/getRandomIntInclusive.mjs";
import characteristics from "./characteristics.mjs";

class Character {
  constructor() {
    this.gender = this.genGender();
    this.pronoun = this.genPronoun();
    this.traits = this.genTraits();
    this.job = this.genJob();
    this.desires = this.genDesires();
    this.ageMin = 8;

    //found it better to have all of these just in the subclass
    //this.race = this.genRaceEvenOdds();
    //this.firstName = this.genFirstName();
    //this.lastName = this.genLastName();
    //this.ageMax = 110;
    //this.age = this.genAge();
  }
  //useful for a cosmopolitan area
  genRaceEvenOdds() {
    let randInt = getRandomIntInclusive(0, characteristics.race.length - 1);
    return characteristics.race[randInt];
  }
  genGender() {
    let randomInt = getRandomIntInclusive(0, 1);
    let gender;
    if (randomInt == 0) {
      gender = "male";
    } else if (randomInt == 1) {
      gender = "female";
    }
    return gender;
  }
  genPronoun() {
    //helpful guide @ https://uwm.edu/lgbtrc/support/gender-pronouns/
    if (this.gender == "male") {
      return {
        subject: "he",
        object: "him",
        possessive: "his",
        possessivePronoun: "his",
        reflexive: "himself",
      };
    } else {
      return {
        subject: "she",
        object: "her",
        possessive: "her",
        possessivePronoun: "hers",
        reflexive: "herself",
      };
    }
  }
  //will now dynamically pull based on race and gender
  //This does make names generically "race locked"
  //IE you won't have a dwarf generating with an Elf name, which idk maybe some people want
  genFirstName() {
    let randInt = getRandomIntInclusive(
      0,
      characteristics.firstNames[this.race][this.gender].length - 1
    );

    return characteristics.firstNames[this.race][this.gender][randInt];
  }
  genLastName() {
    ///Definitely a more elegant way to do this dwarf bit
    //just not sure if I am going to keep this scand style
    //will switch to the actual characteristics object if I decide to keep
    if (this.race == "Dwarf") {
      const randInt = getRandomIntInclusive(
        0,
        characteristics.firstNames[this.race][this.gender].length - 1
      );
      1;
      if (this.gender == "male") {
        return characteristics.firstNames.Dwarf.male[randInt] + "son";
      } else {
        return characteristics.firstNames.Dwarf.female[randInt] + "dotter";
      }
    } else {
      const randInt = getRandomIntInclusive(
        0,
        characteristics.lastNames[this.race].length - 1
      );
      return characteristics.lastNames[this.race][randInt];
    }
  }
  //TODO: flesh this out to make younger ages more common
  genAge() {
    return getRandomIntInclusive(this.ageMin, this.ageMax);
  }
  genTraits() {
    let randArr = [];
    let personalityArr = [];

    for (let i = 0; i < getRandomIntInclusive(2, 5); i++) {
      let num = getRandomIntInclusive(
        0,
        characteristics.characterTraits.all.length - 1
      );
      //don't want them to double up on personality traits
      if (num in randArr) {
        continue;
      }
      randArr.push(num);
    }

    for (let i = 0; i < randArr.length; i++) {
      personalityArr.push(characteristics.characterTraits.all[randArr[i]]);
    }
    return personalityArr;
  }
  //each character starts with one job field, up to 2-3 different professions in that field
  //TODO: maybe based on age, they could have multiple job fields
  //or just a small percentage chance to multispec
  genJob() {
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
  genDesires() {
    let num = getRandomIntInclusive(0, characteristics.desires.length - 1);
    return characteristics.desires[num];
  }
}

//put all the subclasses into an object so that we can iterate over keys
//in other functions
const raceClasses = {
  //use polymorphism to change characteristics about the individual races
  Human: class Human extends Character {
    constructor() {
      super();
      this.race = "Human";
      this.ageMax = 118;
      this.age = this.genAge();
      this.firstName = this.genFirstName();
      this.lastName = this.genLastName();
    }
  },
  Dwarf: class Dwarf extends Character {
    constructor() {
      super();
      this.race = "Dwarf";
      this.ageMax = 250;
      this.age = this.genAge();
      this.firstName = this.genFirstName();
      this.lastName = this.genLastName();
    }
  },
  Elf: class Elf extends Character {
    constructor() {
      super();
      this.race = "Elf";
      this.ageMax = 750;
      this.age = this.genAge();
      this.firstName = this.genFirstName();
      //tolkien elves don't have last names,
      //may still stick a generator in for elassee
      this.lastName = "";
      //this.lastName = this.genLastName();
    }
  },
  HalfElf: class HalfElf extends Character {
    constructor() {
      super();
      this.race = "Half-Elf";
      this.custom = this.genCustom();
      this.ageMax = 180;
      this.age = this.genAge();
      this.firstName = this.genFirstName();
      this.lastName = this.genLastName();
    }
    //polymorphism change for halfelf
    genCustom() {
      //flip a coin, 50/50 chance of getting elven vs human name
      const randInt = getRandomIntInclusive(0, 1);
      if (randInt == 0) {
        return "Elf";
      } else {
        return "Human";
      }
    }
    //polymorphism change for halfelf, swapping custom for race
    genFirstName() {
      let randInt = getRandomIntInclusive(
        0,
        characteristics.firstNames[this.custom][this.gender].length - 1
      );

      return characteristics.firstNames[this.custom][this.gender][randInt];
    }
    genLastName() {
      if (this.custom == "Elf") {
        return "";
      } else {
        let randInt = getRandomIntInclusive(
          0,
          characteristics.lastNames[this.custom].length - 1
        );
        return characteristics.lastNames[this.custom][randInt];
      }
    }
  },
  Halfling: class Halfling extends Character {
    constructor() {
      super();
      this.race = "Halfling";
      this.ageMax = 130;
      this.age = this.genAge();
      this.firstName = this.genFirstName();
      this.lastName = this.genLastName();
    }
    genLastName() {
      const randAdjInt = getRandomIntInclusive(
        0,
        characteristics.lastNames.HalflingAdj.length - 1
      );
      const randNounInt = getRandomIntInclusive(
        0,
        characteristics.lastNames.HalflingNoun.length - 1
      );
      const namefirstHalf = characteristics.lastNames.HalflingAdj[randAdjInt];
      const nameSecondHalf =
        characteristics.lastNames.HalflingNoun[randNounInt];
      let fullName = namefirstHalf + nameSecondHalf;
      fullName = fullName.toLowerCase();
      fullName = fullName.charAt(0).toUpperCase() + fullName.slice(1);
      return fullName;
    }
  },
};

//export { Character, Human, Dwarf, Elf, HalfElf, Halfling };
export { Character, raceClasses };
