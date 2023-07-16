import "./styles/header.css";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <>
      <Link to="/">
        <img
          className="logo"
          alt="Logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKJrIkiht9oc6YBoRKnKn8CDzvht9EYTQ5Q&usqp=CAU"
        />
      </Link>
    </>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="navItems">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="link" to="/instamart">
              Instamart
            </Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
