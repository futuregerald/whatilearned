import React, { Component } from 'react';
import { Toolbar, IconButton } from 'material-ui';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import styled from 'styled-components';

import logo from '../images/logo2.svg';

const StyledAppBar = styled.div`
  && {
    width: 100%;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 5px;
    justify-items: center;
  }
`;

const StyledLogo = styled.img`
  width: 20rem;
`;

  const StyledToolbar = styled(Toolbar)`
  && {
  display:grid;
  grid-template-columns: 1fr 5px;
  border: "solid red 2px"
  width: 100%
  }
  `;

const StyledMenuDivArea = styled.div`
  top: 5rem
  justify-self: end

`;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      anchorEl: null,
    };
  }
  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <StyledAppBar>
      <StyledToolbar>
        <StyledLogo src={logo} alt="WhatILearned.com logo" />
      </StyledToolbar>
      {/* This is the avatar menu */}
      <StyledMenuDivArea>
        <IconButton
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
          size="large"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Sign In</MenuItem>
        </Menu>
      </StyledMenuDivArea>
      {/* This is the end of the avatar menu */}
    </StyledAppBar>
    );
  }
}

export default Header;
 