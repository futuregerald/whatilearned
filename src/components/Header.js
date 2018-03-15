import React, { Component } from 'react';
import { Toolbar, IconButton } from 'material-ui';
import Menu, { MenuItem } from 'material-ui/Menu';
import MenuIcon from 'material-ui-icons/Menu';
import Modal from 'material-ui/Modal';
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
&& {
  top: 5rem
  justify-self: end
  background-color: "black"
}
`;
const StyledModalFull = styled.div`
  border: 0
  background-color: #BDC2E6;
  width: 50%
  height: 50%
  position: absolute
  left: 25%
  top: 25%
  box-shadow: 0 0 transparent
  
  @media (max-width: 1100px) {
    width: 80%
    left: 10%
    top: 10rem
  }
  @media (max-width: 700px) {
    width: 100%
    left: 0
    top: 10rem
  }
`;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      anchorEl: null,
      modal: false,
    };
  }
  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null,modal: !this.state.modal });
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
          style={{top:15}}
        >
          <MenuIcon style={{fontSize: '2em'}}/>
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
      <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.modal}
          onClose={this.handleClose}
        >
        <StyledModalFull><h1>hey tis is a modal</h1></StyledModalFull>
      </Modal>
    </StyledAppBar>
    );
  }
}

export default Header;
 