import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <Link to="/students">Students Page</Link>
        <Link to="/campus">Campus Page</Link>
        <Link to="/">home</Link>
      </nav>
    </div>
  );
}

export default Nav;
