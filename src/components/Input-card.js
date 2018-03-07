import React from 'react';
import 'typeface-roboto';
import { TextField, Card, CardContent  } from 'material-ui';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  && {
    display: grid;
    grid-template-columns: 0.9fr;
    width: 100%;
    background-color: #81d4fa;
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

const InputCard = ({ id, lesson, from, onChange, lessonPlaceholder, fromPlaceholder})=> {
  console.log(lesson)
  
    return (
        <StyledCard>
        <StyledCardContent>
          <TextField name="lesson" label="I learned..." value={lesson} helperText={lessonPlaceholder} fullWidth onChange={onChange.bind(this,id)} />
          <TextField name="from" fullWidth id="1" label="From..." value={from} helperText={fromPlaceholder} onChange={onChange.bind(this,id)} />
        </StyledCardContent>
      </StyledCard>
    );
  
}

export default InputCard;
