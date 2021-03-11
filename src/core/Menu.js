import React, { Component } from "react";
// Link does not reload the webpage vs anchor tags that do reload
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarBrand = styled.a`
  @media (min-width: 320px) {
    font-size: 1.1em !important;
  }
  @media (min-width: 991px) {
    font-size: 1.1em !important;
  }
  @media (min-width: 1026px) {
    font-size: 1.4em !important;
  }
  @media (min-width: 1080px) {
    font-size: 1.75em !important;
  }
`;

const MainMenu = styled.div`
@media (max-width: 991px) {
  border-radius: 5px;
  border: 1px background-color: rgba(30, 32, 43, 0.9) solid;
  width: 100%;
  background-color: rgba(38, 40, 51, 0.9);
  }
`;

const MenuItem = styled.li`
  @media (max-width: 991px) {
    z-index: 3;
    border-radius: 5px;
    width: 100%;
    color: #cacaca;
    align-items: center;
    &:nth-child(odd) {
      background-color: rgba(38, 40, 51, 0.5);
    }
    &:nth-child(even) {
      background-color: rgba(35, 37, 48, 0.5);
    }
    &:hover {
      background-color: rgba(30, 32, 43, 0.9);
    }
  }
`;

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      errorMessage: "",
    };
  }

  routingFunction = (param) => {
    this.props.history.push({
      pathname: `/`,
      state: param,
    });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark primary-color">
        <NavBarBrand href="/" className="navbar-brand">
          <img id="nav-brand" src="https://i.imgur.com/7biygZd.png" />
        </NavBarBrand>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#basicExampleNav"
          aria-controls="basicExampleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <MainMenu className="collapse navbar-collapse" id="basicExampleNav">
          <ul className="navbar-nav ml-auto">
            <MenuItem className="nav-item">
              <a className="nav-link" href="#projects">
                Work
              </a>
            </MenuItem>
            <MenuItem className="nav-item">
              <a className="nav-link" href="https://github.com/JoannaMakary?tab=repositories">
                Github
              </a>
            </MenuItem>
            <MenuItem className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/joannamakary/">
                LinkedIn
              </a>
            </MenuItem>
            <MenuItem className="nav-item">
              <a
                className="nav-link"
                href="https://drive.google.com/file/d/1-dDzQgWYRidZwHrHD-aYmAdYsvAkxhhz/view?usp=sharing"
              >
                Resume
              </a>
            </MenuItem>
            <MenuItem className="nav-item">
              <a id="contact-link" className="nav-link" href="#contact-me">
                Contact
              </a>
            </MenuItem>
          </ul>
        </MainMenu>
      </nav>
    );
  }
}

export default Menu;
