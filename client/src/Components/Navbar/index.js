import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/plants">My plants</Link>
      <Link to="/notifications">Notifications</Link>
    </nav>
  );
}

export default Navbar;
