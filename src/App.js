import "./App.scss";
import Header from "./components/header/Header";
import { useState } from "react";

// named imports
// default import -> does not require curly braces
// named import -> requires curly braces
import getCharacterDetails, { getCharacters } from "./utils/utils.js";
import SideBar from "./components/side-bar/SideBar";
import CharacterDetails from "./components/character-details/CharacterDetails";
import Relatives from "./components/relatives/Relatives";

export default function App() {
  const [charId, setCharId] = useState(48);

  // charId is retrieved from state above -> 48 by default
  // state eventually gets passed as a prop to one of the component
  // and that component will then render the prop using html tags
  const [characters, setCharacters] = useState(getCharacters(charId));
  const [characterDetails, setCharacterDetails] = useState(
    getCharacterDetails(charId)
  );

  const handleClick = (clickEvnt, charIdClickedOn) => {
    setCharId(charIdClickedOn);
    setCharacters(getCharacters(charIdClickedOn));
    setCharacterDetails(getCharacterDetails(charIdClickedOn));
  };

  return (
    <div className="app">
      <Header />
      <section className="app__container">
        <section className="app__container-left">
          <CharacterDetails character={characterDetails} />
          <Relatives relatives={characterDetails.relatives} />
        </section>
        <SideBar characters={characters} onClick={handleClick} />
      </section>
    </div>
  );
}
