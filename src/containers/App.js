import React, { Component } from 'react';
import 'typeface-roboto';
import { Card, CardContent, Toolbar, Typography, Button } from 'material-ui';
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
        }
      }
      
    };
  }
   onClickAddLesson = ()=>{
      let unique = true
      let elements = Object.keys(this.state.checkins)
      elements.sort((a, b)=>{return a - b});
      const newElement = elements[elements.length-1]
      console.log(newElement)
       this.setState({checkins: {...this.state.checkins,[newElement+1]: {
        id: newElement+1,
        lesson: "",
        from: ""
      }
    }})
  }
  

  lessonOnChangeHandler = (id,e)=>{

    const {from, lesson} = this.state.checkins[id]
    if (e.target.name === "lesson"){
      return this.setState({checkins: {...this.state.checkins, [id]: {lesson: e.target.value , from}}})
     } else {
      return this.setState({checkins: {...this.state.checkins, [id]: {from: e.target.value , lesson}}}) 
     }
  }

  lessonOnDeleteHandler = (id,e)=>{
    console.log(id)
    console.log(e)
    let newState = {...this.state.checkins}
    delete newState[id]
    return this.setState({checkins:newState})
  }
  
  render() {

    const inputs = Object.keys(this.state.checkins).map((k)=>{
      
      const c = this.state.checkins[k]
      if (c.id === 1){
        return <InputCard 
          key={k} 
          lesson={c.lesson} 
          from={c.from} 
          id={k} 
          onChange={this.lessonOnChangeHandler} 
          lessonPlaceholder={"Example: CSS Grid"}
          fromPlaceholder={"Example: Wes Bos"}
          
          />
      } else {
      return <InputCard key={k} lesson={c.lesson} from={c.from} id={k} onChange={this.lessonOnChangeHandler} deleteB={true} deleteHandler={this.lessonOnDeleteHandler}/>
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
                <StyledButton variant="fab" aria-label="add" onClick={this.onClickAddLesson.bind(this)}>
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
