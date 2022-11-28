import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  );
}
