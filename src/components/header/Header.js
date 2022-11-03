import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <a href="/">
        <img
          src="https://64.media.tumblr.com/04334e80d198b7f9f8524a2df3887b2c/89fd4f5cac54b404-55/s128x128u_c1/c092a9985ecf2559b6b6c2b4cf712e0a3fbca656.pnj"
          alt="bobs burgers logo"
          className="header__logo"
        />
      </a>
      <h1 className="header__text">
        Bob's Burgers Family{" "}
        <span role="img" aria-label="burger emoji">
          🍔
        </span>
      </h1>
    </header>
  );
}
