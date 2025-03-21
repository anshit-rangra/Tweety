import React from "react";
import { SiThunderbird } from "react-icons/si";

const Footer = () => {
  return (
    <section className="footer">
      <h3>
        <span className="logo">
          <SiThunderbird />
        </span>
         Designed & Developed by <span>Anshit Rangra</span>
      </h3>
    </section>
  );
};

export default Footer;
