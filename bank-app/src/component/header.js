import "./css/header.css";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">create account</Link>
            
          </li>
          <li>
            <Link to="/account">accounts</Link>

          </li>
        </ul>
      </nav>

      <Outlet /> */}
      <h1 className="header">Bank App</h1>
    </>
  );
}

export default Navbar;
