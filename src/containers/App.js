import React, { Component } from 'react';
import 'typeface-roboto';
import { TextField, Card, CardContent, AppBar, Toolbar, Typography } from 'material-ui';
import { createMuiTheme } from 'material-ui/styles';
import styled from 'styled-components';

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

const StyledCard = styled(Card)`
  && {
    display: grid;
    grid-template-columns: 0.9fr;
    width: 100%;
    background-color: #81d4fa;
  }
`;

const StyledCardHeader = StyledCard.extend`
  && {
    background-color: #1565c0;
  }
`;
const StyledCardContent = styled(CardContent)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  grid-gap: 20px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const H3 = styled.h3`
  color: white;
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
  }
  render() {
    return (
      <OuterBody>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              What I Learned Today
            </Typography>
          </Toolbar>
        </AppBar>
        <BodyContainer>
          <div />
          <CenterContainer>
            <StyledCardHeader>
              <StyledCardContent>
                <H3>Today</H3>
              </StyledCardContent>
            </StyledCardHeader>
            <StyledCard>
              <StyledCardContent>
                <TextField id="1" label="I learned..." helperText="Example: CSS grid" fullWidth />

                <TextField fullWidth id="1" label="From..." helperText="Example: Wes Bos" />
              </StyledCardContent>
            </StyledCard>
            <StyledCard>
              <StyledCardContent>
                <TextField id="1" label="I learned..." helperText="Example: React" fullWidth />
                <TextField fullWidth id="1" label="From..." helperText="Example:  https://www.udemy.com/react-redux/" />
              </StyledCardContent>
            </StyledCard>
            <StyledCard>
              <StyledCardContent>
                <TextField id="1" label="I learned..." helperText="Example: Node" fullWidth />
                <TextField
                  fullWidth
                  id="1"
                  label="From..."
                  helperText="Example: https://medium.com/the-node-js-collection/tagged/tutorial"
                />
              </StyledCardContent>
            </StyledCard>
          </CenterContainer>
          <div />
        </BodyContainer>
      </OuterBody>
    );
  }
}

export default App;
