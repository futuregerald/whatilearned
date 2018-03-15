import React from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto';
import { Card, CardContent, Button } from 'material-ui';
import AddIcon from 'material-ui-icons/Add';
import styled from 'styled-components';

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



const HeadingH3Add = ({Title, onClickHandler})=> {


    return (
            <StyledCardHeader>
              <StyledCardContent>
                <H3>{Title}</H3>
                <StyledButton variant="fab" aria-label="add" onClick={onClickHandler.bind(this)}>
                 <AddIcon />
                </StyledButton>
              </StyledCardContent>
            </StyledCardHeader>
           
    );

}

HeadingH3Add.propTypes = {
  Title: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired, 
}

export default HeadingH3Add;
