import React, { useState } from 'react';
import { NavLink as ReactLink } from "react-router-dom"; //used for not to reload page and component should be dynamically mounted.
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import '../CSS/CustomNavbar.css';

function CustomNavbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  light expand="lg" {...args}>
        <NavbarBrand >MyBlog</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>

            <NavItem>
              <NavLink tag={ReactLink} to="/">Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/about">About</NavLink>
            </NavItem>

            <NavItem>
              <NavLink  tag={ReactLink} to="/login">Login</NavLink>
            </NavItem>

            <NavItem>
              <NavLink  tag={ReactLink} to="/signup">Signup</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={ReactLink} to="/services">Services</DropdownItem>
                <DropdownItem tag={ReactLink} to="/contact">Contact us</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Youtube</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
