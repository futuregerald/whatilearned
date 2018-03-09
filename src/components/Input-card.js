import React from 'react';
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
    top: 3rem
    height: 1rem
    width: 2.2rem
  }
`;

const StyledCardContent = styled(CardContent)`
  display: grid;
  grid-template-columns: 12fr 15fr 1fr;
  width: 100%;
  grid-gap: 20px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const InputCard = ({ id, lesson, from, onChange, lessonPlaceholder, fromPlaceholder, deleteB, deleteHandler})=> {
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
          <TextField name="lesson" label="I learned..." value={lesson} helperText={lessonPlaceholder} fullWidth onChange={onChange.bind(this,id)} />
          <TextField name="from" fullWidth id="1" label="From..." value={from} helperText={fromPlaceholder} onChange={onChange.bind(this,id)} />
          {deleteB && deleteButton()}
        </StyledCardContent>
      </StyledCard>
    );
  
}

export default InputCard;
