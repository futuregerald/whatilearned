import React, { Component } from 'react';
import 'typeface-roboto';
import { Toolbar, IconButton } from 'material-ui';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import styled, { injectGlobal } from 'styled-components';
import gravatar from 'gravatar-api';
import InputLearnedCard from '../components/Input-learned-card';
import InputQuestionCard from '../components/Input-question-card';
import HeadingH3Add from '../components/Heading-h3-add';

import logo from '../images/logo2.svg';

injectGlobal`

  body {
    background-color: #BDC3E7;
  }
`;

const OuterBody = styled.div`
  font-family: 'Roboto';
`;

const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin-top: 10px;
  @media (min-width: 1100px) {
    grid-template-columns: 1fr 4fr 1fr;
  }
`;

const CenterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  justify-items: center;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

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
         
    );
  }
}

export default Header;
