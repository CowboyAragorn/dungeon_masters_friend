import { charQueue } from "../addToCharQueue.mjs";
import appendCategories from "./appendCategories.mjs";

//allows user to click on previously generated character in queue and display it in the table
export default function appendCharFromQueue() {
  const buttonId = event.target.id;
  const char = charQueue.find((character) => character.id == buttonId);
  appendCategories(char);
}
