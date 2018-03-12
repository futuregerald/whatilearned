import React, { Component } from 'react';
import 'typeface-roboto';
import { Toolbar, IconButton } from 'material-ui';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import styled , {injectGlobal} from 'styled-components';
import gravatar from 'gravatar-api'
import InputLearnedCard from '../components/Input-learned-card'
import InputQuestionCard from '../components/Input-question-card'
import HeadingH3Add from '../components/Heading-h3-add'

import logo from '../images/logo2.svg'


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
    display:grid;
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
      },
      questions: {
        1 : {
          id: 1,
          question: "",
        }
      },
      anchorEl: null
      
    };
  }
   onClickAddLesson = ()=>{
      let elements = Object.keys(this.state.checkins)
      elements.sort((a, b)=>{return a - b});
      console.log(elements)
      const newElement = parseInt(elements[elements.length-1],10)
      console.log(newElement)
       this.setState({checkins: {...this.state.checkins,[newElement+1]: {
        id: newElement+1,
        lesson: "",
        from: ""
      }
    }})
  }

  onClickAddQuestion = ()=>{
    let elements = Object.keys(this.state.questions)
    elements.sort((a, b)=>{return a - b});
    console.log(elements)
    const newElement = parseInt(elements[elements.length-1],10)
    console.log(newElement)
     this.setState({questions: {...this.state.questions,[newElement+1]: {
      id: newElement+1,
      question: "",
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

  questionOnChangeHandler = (id,e)=>{
      return this.setState({questions: {...this.state.questions, [id]: {question: e.target.value}}})
  }

  lessonOnDeleteHandler = (id,e)=>{
    console.log(id)
    console.log(e)
    let newState = {...this.state.checkins}
    delete newState[id]
    return this.setState({checkins:newState})
  }

  questionOnDeleteHandler = (id,e)=>{
    console.log(id)
    console.log(e)
    let newState = {...this.state.questions}
    delete newState[id]
    return this.setState({questions:newState})
  }

  getGravatarUrl = (email) => {
    const options = {
      email
    }
    return gravatar.imageURL(options);
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

    const lessonInputs = Object.keys(this.state.checkins).map((k)=>{
      
      const c = this.state.checkins[k]
      if (c.id === 1){
        return <InputLearnedCard 
          key={k} 
          lesson={c.lesson} 
          from={c.from} 
          id={k} 
          onChange={this.lessonOnChangeHandler} 
          lessonPlaceholder={"Example: CSS Grid"}
          fromPlaceholder={"Example: Wes Bos"}
          
          />
      } else {
      return <InputLearnedCard key={k} lesson={c.lesson} from={c.from} id={k} onChange={this.lessonOnChangeHandler} deleteB={true} deleteHandler={this.lessonOnDeleteHandler}/>
      }
    })

    const questionInputs = Object.keys(this.state.questions).map((k)=>{
      
      const c = this.state.questions[k]
      if (c.id === 1){
        return <InputQuestionCard 
          key={k} 
          question={c.question} 
          id={k} 
          onChangeQuestion={this.questionOnChangeHandler} 
          questionPlaceholder={"Example: What is the React Context API!?"}
          />
      } else {
      return <InputQuestionCard key={k} question={c.question} id={k} onChangeQuestion={this.questionOnChangeHandler} deleteB={true} deleteHandler={this.questionOnDeleteHandler}/>
      }
    })
    

    return (
      <OuterBody>
      {console.log(this.state)}
        <StyledAppBar >
          <StyledToolbar>
            <StyledLogo src={logo} alt="WhatILearned.com logo"/>
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
        <BodyContainer>
          <div />
          <CenterContainer>
            <HeadingH3Add Title="Today..." onClickHandler={this.onClickAddLesson}/>
            {lessonInputs}
            <br />
            <HeadingH3Add Title="I have questions about..." onClickHandler={this.onClickAddQuestion}/>
            {questionInputs}
          </CenterContainer>
          <div />
        </BodyContainer>
      </OuterBody>
    );
  }
}

export default App;
