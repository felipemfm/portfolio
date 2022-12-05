import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <h1>felipemfm@portfolio</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  );
}
