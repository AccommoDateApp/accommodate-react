import * as React from "react";
import { Link } from "react-router-dom";
import { Container } from "../Container";
import "./Navbar.scss";

interface NavbarProps extends React.Props<any> { }

export const Navbar = (props: NavbarProps) => (
  <nav className="navbar">
    <Container>
      <div className="logo">
        <Link to="/">
          <img src={require("../../images/logo.png")} />
        </Link>
      </div>

      <div className="menu">
        {props.children}
      </div>
    </Container>
  </nav>
);
