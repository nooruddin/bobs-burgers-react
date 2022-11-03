import "./CharacterDetails.scss";

export default function CharacterDetails({ character }) {
  // destructuring -> const/let {keyOne, keyTwo, keyThree, ...everyOtherKeyNotNeeded} = variable;
  // spread operator -> makes a copy of entire object
  // const student = {firstName: 'John', course: 'Web Dev'}
  // const copyStudent = {...student}
  // rest = {id: '', url: '', relatives: []}
  const {
    name,
    image,
    gender,
    hairColor,
    occupation,
    firstEpisode,
    voicedBy,
    wikiUrl,
    age,
    ...rest
  } = character;
  return (
    <main className="details">
      <h1 className="details__heading">{name}</h1>
      <section className="details__info">
        <section className="details__left">
          <p className="details__voiced-by">Voiced By {voicedBy}</p>
        </section>
        <section className="details__right">
          <p className="details__first-episode">
            <span role="img" aria-label="first episode emoji">
              📺 1️⃣
            </span>{" "}
            {firstEpisode}
          </p>
          <p className="details__gender">
            {gender === "Female" ? (
              <span role="img" aria-label="gender emoji">
                ♀ Female
              </span>
            ) : (
              <span role="img" aria-label="gender emoji">
                ♂ Male
              </span>
            )}
          </p>
        </section>
      </section>
      <section className="details__extra-info">
        <p className="details__occupation">
          <span role="img" aria-label="briefcase emoji">
            💼
          </span>{" "}
          - {occupation}
        </p>
        {hairColor && (
          <p className="details__hair-color">Hair Color - {hairColor}</p>
        )}
        {age ? (
          <p className="details__age">Age - {age}</p>
        ) : (
          <p className="details__age">No Age Available</p>
        )}
        <a
          className="details__wiki"
          href={wikiUrl}
          target="_blank"
          rel="noreferrer noopener"
        >
          Wiki
        </a>
        <img className="details__avatar" src={image} alt={name} />
      </section>
    </main>
  );
}
