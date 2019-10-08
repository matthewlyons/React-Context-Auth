import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Container,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { StoreContext } from '../context/store';
import { types } from '../context/reducers';

export default function Header() {
  const { state, dispatch } = useContext(StoreContext);
  const { isAuthenticated } = state;

  const guestLinks = (
    <NavItem>
      <Link to='/Login'>Login</Link>
    </NavItem>
  );

  const authLinks = (
    <React.Fragment>
      <NavItem>
        <NavLink>
          <Link to='/Dashboard'>Dashboard</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink onClick={() => dispatch({ type: types.AUTH_LOGOUT })}>
          Logout
        </NavLink>
      </NavItem>
    </React.Fragment>
  );

  return (
    <Navbar color='light'>
      <Container>
        <NavbarBrand>React Auth Boilerplate</NavbarBrand>
        <Nav>{isAuthenticated ? authLinks : guestLinks}</Nav>
      </Container>
    </Navbar>
  );
}
