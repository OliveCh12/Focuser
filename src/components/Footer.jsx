import React from "react";

const Footer = props => {
  return (
    <footer>
      <div>
        © Copyright <strong>{new Date().getFullYear()}</strong> by{" "}
        {props.author}
      </div>
    </footer>
  );
};

export default Footer;
