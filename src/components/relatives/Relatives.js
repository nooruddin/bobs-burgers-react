import "./Relatives.scss";

export default function Relatives({ relatives }) {
  return (
    <section className="relatives">
      <h1 className="relatives__heading">Relatives</h1>
      {relatives.length > 0 ? (
        <section className="relatives__container">
          {relatives.map((relative) => (
            <section className="relatives__item" key={relative.name}>
              <h3 className="relatives__name">{relative.name}</h3>
              <p className="relatives__relationship">{relative.relationship}</p>
            </section>
          ))}
        </section>
      ) : (
        <section className="relatives__container">
          <p className="relatives__no-data">No Relatives</p>
        </section>
      )}
    </section>
  );
}
