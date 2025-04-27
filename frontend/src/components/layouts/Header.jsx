import React from "react";
import { SiThunderbird } from "react-icons/si";

const Header = () => {
  return (
    <nav>
      <h1>Tweety</h1>
      <span className="logo">
        <SiThunderbird />
      </span>
    </nav>
  );
};

export default Header;
