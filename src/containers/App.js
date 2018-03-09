import React, { Component } from 'react';
import 'typeface-roboto';
import { Card, CardContent, AppBar, Toolbar, Typography, Button } from 'material-ui';
import AddIcon from 'material-ui-icons/Add';
import styled from 'styled-components';
import InputCard from '../components/Input-card'

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

const StyledCardHeader = styled(Card)`
  && {
    display: grid;
    grid-template-columns: 0.9fr;
    width: 100%;
    background-color: #1565c0;
  }
`;

const StyledButton = styled(Button)`
  && {
    background-color: #E34304;
    justify-self: end
    top: 3rem
  }
`;

const StyledAppBar = styled.div`
  && {
    width: 100%;
    padding: 0;
    
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


class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      checkins: {
        1 : {
          id: 1,
          lesson: "",
          from: "",
        },
        2 : {
          id: 2,
          lesson: "",
          from: "",
        }
      }
      
    };
  }
  
  render() {

    const lessonOnChangeHandler = (id,e)=>{

      const {from, lesson} = this.state.checkins[id]
      if (e.target.name === "lesson"){
        return this.setState({checkins: {...this.state.checkins, [id]: {lesson: e.target.value , from}}})
       } else {
        return this.setState({checkins: {...this.state.checkins, [id]: {from: e.target.value , lesson}}}) 
       }
    }

    const inputs = Object.keys(this.state.checkins).map((k)=>{
      const c = this.state.checkins[k]
      if (c.id === 1){
        return <InputCard 
          key={k} 
          lesson={c.lesson} 
          from={c.from} 
          id={k} 
          onChange={lessonOnChangeHandler} 
          lessonPlaceholder={"Example: CSS Grid"}
          fromPlaceholder={"Example: Wes Bos"}
          />
      } else {
      return <InputCard key={k} lesson={c.lesson} from={c.from} id={k} onChange={lessonOnChangeHandler} />
      }
    })

    

    return (
      <OuterBody>
      {console.log(this.state)}
        <StyledAppBar >
          <Toolbar>
            <Typography variant="title" color="inherit">
              What I Learned Today
            </Typography>
          </Toolbar>
        </StyledAppBar>
        <BodyContainer>
          <div />
          <CenterContainer>
            <StyledCardHeader>
              <StyledCardContent>
                <H3>Today...</H3>
                <StyledButton variant="fab" aria-label="add" >
                 <AddIcon />
                </StyledButton>
              </StyledCardContent>
            </StyledCardHeader>
            
            {inputs}
          </CenterContainer>
          <div />
        </BodyContainer>
      </OuterBody>
    );
  }
}

export default App;
