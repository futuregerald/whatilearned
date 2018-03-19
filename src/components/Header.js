import React, { Component } from 'react';
import { Toolbar, IconButton, TextField } from 'material-ui';
import Menu, { MenuItem } from 'material-ui/Menu';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Modal from 'material-ui/Modal';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';

import logo from '../images/logo2.svg';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

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
  border-radius: 5px
  outline: none;
  border: 0
  background-color: white;
  width: 50%
  height: 50%
  position: absolute
  top: 10rem
  left: 0;
  right: 0;
  margin: auto;
  box-shadow: 0 0 transparent !important
  max-width: 35rem;
  max-height: 30rem;
  
  @media (max-width: 1100px) {
    width: 80% !important
    top: 10rem
  }
  @media (max-width: 700px) {
    min-width: 100%
    left: 0
    top: 10rem
  }
`;

const TopBar = styled.div`
  position: absolute
  width: 100%
  height: 6rem
  background-color: #1565c0
  top: 0
  left: 0
`;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      anchorEl: null,
      modal: false,
      loginValue: 1
    };
  }
  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null});
  };

  openModal = () => {
    this.setState({ modal: true });
  };
  closeModal = () => {
    this.setState({ anchorEl: null,modal: false });
  };
  handleSignInModalChange = (event, value) => {
    this.setState({ loginValue: value });
  };

  render() {
    const { anchorEl, loginValue } = this.state;
    const open = Boolean(anchorEl);

    return (
      <StyledAppBar>
      <TopBar>
      </TopBar>
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
          <AccountCircle style={{fontSize: '2em'}}/>
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
          onClose={this.closeModal}
          
        >
          <MenuItem onClick={this.openModal}>Sign In</MenuItem>
        </Menu>
      </StyledMenuDivArea>
      {/* This is the end of the avatar menu */}
      <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.modal}
          onClose={this.closemOdal}
          onBackdropClick={this.closeModal}
        >
        <StyledModalFull>
          <AppBar position="static">
          <Tabs value={loginValue} centered onChange={this.handleSignInModalChange}>
            <Tab label="Sign in" />
            <Tab label="New Account" />
          </Tabs>
        </AppBar>
        {loginValue === 0 && <TabContainer>
          <TextField
          id="search"
          label="e-mail address"
          type="email"
          margin="normal"
        />
          </TabContainer>}
        {loginValue === 1 && <TabContainer>Item Two</TabContainer>}
        </StyledModalFull>
      </Modal>
    </StyledAppBar>
    );
  }
}

export default Header;
 