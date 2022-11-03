import bobBurgersChars from "../data/characters.json";
import bobBurgersCharsDetails from "../data/charactersDetails.json";

// functions to retrieve data

// named exports require curly braces and their name can be changed when imported
// default exports require no curly braces and their name cannot be changed

// named export

// this function provides all the characters except the one with id -> characterId
export const getCharacters = (characterId) => {
  return bobBurgersChars.filter((character) => character.id !== characterId);
};

const getCharacterDetails = (characterId) => {
  return bobBurgersCharsDetails.find(
    (character) => character.id === characterId
  );
};

// default export
// by default you can only have one "default export" from your js file
export default getCharacterDetails;

// MODULE IN NODEJS
