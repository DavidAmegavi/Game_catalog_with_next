import React from "react";
import Link from "next/link";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            Home
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/games/">
            Games
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/platforms/">
            Platforms
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signin">
            Sign in
          </a>
        </li>
      </ul>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
