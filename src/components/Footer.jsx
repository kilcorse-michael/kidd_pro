import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  NavbarToggler,
  Collapse,
  NavLink,
} from "reactstrap";
import { SocialIcon } from 'react-social-icons';
import { NavLink as RRNavLink } from "react-router-dom";

export default function Footer() {
  const [isOpen, setOpen] = useState(false);

  function toggle() {
    setOpen(!isOpen);
  }

  return (
    <Navbar fixed="bottom" className="main-nav" color="light" light>
      <NavbarBrand className="me-auto" href="/">
        KiDD.pro
      </NavbarBrand>
      <SocialIcon className="social-icons" network="facebook" />
      <SocialIcon className="social-icons" network="linkedin" />
      <SocialIcon className="social-icons" network="twitter" />
    </Navbar>
  );
}
