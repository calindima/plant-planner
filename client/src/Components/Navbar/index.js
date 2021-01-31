import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/plants">
        My plants
      </Link>
      <Link className="link" to="/notifications">
        Notifications
      </Link>
    </nav>
  );
}

export default Navbar;
