import React, { Component } from 'react';
import 'typeface-roboto';
import styled, { injectGlobal } from 'styled-components';
import gravatar from 'gravatar-api';
import InputLearnedCard from '../components/Input-learned-card';
import InputQuestionCard from '../components/Input-question-card';
import HeadingH3Add from '../components/Heading-h3-add';
import Header from '../components/Header';

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


class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      checkins: {
        1: {
          id: 1,
          lesson: '',
          from: '',
        },
      },
      questions: {
        1: {
          id: 1,
          question: '',
        },
      },
      anchorEl: null,
    };
  }
  onClickAddLesson = () => {
    const elements = Object.keys(this.state.checkins);
    elements.sort((a, b) => a - b);
    console.log(elements);
    const newElement = parseInt(elements[elements.length - 1], 10);
    console.log(newElement);
    this.setState({
      checkins: {
        ...this.state.checkins,
        [newElement + 1]: {
          id: newElement + 1,
          lesson: '',
          from: '',
        },
      },
    });
  };

  onClickAddQuestion = () => {
    const elements = Object.keys(this.state.questions);
    elements.sort((a, b) => a - b);
    console.log(elements);
    const newElement = parseInt(elements[elements.length - 1], 10);
    console.log(newElement);
    this.setState({
      questions: {
        ...this.state.questions,
        [newElement + 1]: {
          id: newElement + 1,
          question: '',
        },
      },
    });
  };

  lessonOnChangeHandler = (id, e) => {
    const { from, lesson } = this.state.checkins[id];
    if (e.target.name === 'lesson') {
      return this.setState({ checkins: { ...this.state.checkins, [id]: { lesson: e.target.value, from } } });
    }
    return this.setState({ checkins: { ...this.state.checkins, [id]: { from: e.target.value, lesson } } });
  };

  questionOnChangeHandler = (id, e) =>
    this.setState({ questions: { ...this.state.questions, [id]: { question: e.target.value } } });

  lessonOnDeleteHandler = (id, e) => {
    console.log(id);
    console.log(e);
    const newState = { ...this.state.checkins };
    delete newState[id];
    return this.setState({ checkins: newState });
  };

  questionOnDeleteHandler = (id, e) => {
    console.log(id);
    console.log(e);
    const newState = { ...this.state.questions };
    delete newState[id];
    return this.setState({ questions: newState });
  };

  getGravatarUrl = email => {
    const options = {
      email,
    };
    return gravatar.imageURL(options);
  };
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

    const lessonInputs = Object.keys(this.state.checkins).map(k => {
      const c = this.state.checkins[k];
      if (c.id === 1) {
        return (
          <InputLearnedCard
            key={k}
            lesson={c.lesson}
            from={c.from}
            id={k}
            onChange={this.lessonOnChangeHandler}
            lessonPlaceholder="Example: CSS Grid"
            fromPlaceholder="Example: Wes Bos"
          />
        );
      }
      return (
        <InputLearnedCard
          key={k}
          lesson={c.lesson}
          from={c.from}
          id={k}
          onChange={this.lessonOnChangeHandler}
          deleteB
          deleteHandler={this.lessonOnDeleteHandler}
        />
      );
    });

    const questionInputs = Object.keys(this.state.questions).map(k => {
      const c = this.state.questions[k];
      if (c.id === 1) {
        return (
          <InputQuestionCard
            key={k}
            question={c.question}
            id={k}
            onChangeQuestion={this.questionOnChangeHandler}
            questionPlaceholder="Example: What is the React Context API!?"
          />
        );
      }
      return (
        <InputQuestionCard
          key={k}
          question={c.question}
          id={k}
          onChangeQuestion={this.questionOnChangeHandler}
          deleteB
          deleteHandler={this.questionOnDeleteHandler}
        />
      );
    });

    return (
      <OuterBody>
        {console.log(this.state)}
        <Header />
        <BodyContainer>
          <div />
          <CenterContainer>
            <HeadingH3Add Title="Today..." onClickHandler={this.onClickAddLesson} />
            {lessonInputs}
            <br />
            <HeadingH3Add Title="I have questions about..." onClickHandler={this.onClickAddQuestion} />
            {questionInputs}
          </CenterContainer>
          <div />
        </BodyContainer>
      </OuterBody>
    );
  }
}

export default App;
