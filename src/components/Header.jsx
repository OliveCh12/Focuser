import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Header = props => {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="/navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a className="nav-item nav-link active" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link" href="/">
                About
              </a>
              <a className="nav-item nav-link" href="/">
              <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
