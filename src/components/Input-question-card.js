import React from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto';
import { TextField, Card, CardContent, Button } from 'material-ui';
import DeleteIcon from 'material-ui-icons/Delete';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  && {
    display: grid;
    grid-template-columns: 0.9fr;
    width: 100%;
    background-color: #81d4fa;
  }
`;

const StyledButton = styled(Button)`
  && {
    top: 0.5rem
    left: 1rem
    height: 1rem
    width: 2.2rem
    background-color: transparent;
    box-shadow: 0 0 transparent
    border-radius: 5px 5px 5px 5px;
  }
`;

const StyledCardContent = styled(CardContent)`
  display: grid;
  grid-template-columns: 1fr 5px;
  width: 100%;
  grid-gap: 20px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const InputQuestionCard = ({ id, question, onChangeQuestion, questionPlaceholder, deleteB, deleteHandler})=> {
  const deleteButton =() =>{
    if (deleteHandler){
      return (
    <StyledButton variant="fab" aria-label="delete" onClick={deleteHandler.bind(this,id)}>
        <DeleteIcon />
      </StyledButton>
    )
    }
    return (
      <StyledButton variant="fab" aria-label="delete">
          <DeleteIcon />
        </StyledButton>
      )
  }
    return (
        <StyledCard>
        <StyledCardContent>
          <TextField name="question" label="I'm curious about..." value={question} helperText={questionPlaceholder} fullWidth onChange={onChangeQuestion.bind(this,id)} />
        
          {deleteB && deleteButton()}
        </StyledCardContent>
      </StyledCard>
    );

}

InputQuestionCard.propTypes = {
  id: PropTypes.string
}

export default InputQuestionCard;
