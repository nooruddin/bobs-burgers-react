import "./SideBar.scss";

// always use map() for translating array of data into array of html tags (React elements)

// in map fn -> use round braces () if no return keyword is used
// or use curly braces {} if return keyword is used
export default function SideBar({ characters, onClick }) {
  return (
    <aside className="sidebar">
      {characters.slice(0, 5).map((character) => (
        <img
          src={character.image}
          alt={character.name}
          className="sidebar__avatar"
          key={character.name + character.id}
          onClick={(clickEvnt) => onClick(clickEvnt, character.id)}
        />
      ))}
    </aside>
  );
}
