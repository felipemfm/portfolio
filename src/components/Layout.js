import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="layout">
        <div className="content">{children}</div>
      </div>
      <footer>
        <p>
          Copyright 2022{" "}
          <a
            href="https://github.com/felipemfm"
            alt="github url"
            target="_blank"
            rel="noreferrer"
          >
            felipemfm
          </a>
        </p>
      </footer>
    </>
  );
}
