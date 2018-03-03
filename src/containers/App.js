import React, { Component } from 'react';
import '../css/app.css';
import 'typeface-roboto'
import {TextField, Card, CardContent} from 'material-ui'

class App extends Component {
  render() {
    return (
      <div className="container">
      <div></div>
      <div className="center-container">
      <Card
      className="card-cell"
      >
        <CardContent
        className="card-cell-content"
        >
        <div className="input-cell">
        <TextField
          id="1"
          label="I learned..."
          helperText="Example: CSS grid"
          fullWidth
        /> 
      </div>
      <div className="input-cell">
        <TextField
        fullWidth
        id="1"
        label="From..."
        helperText="Example: Wes Bos"
        /> 
      </div>
        </CardContent>
      </Card>
      <Card
      className="card-cell"
      >
        <CardContent
        className="card-cell-content"
        >
        <div className="input-cell">
        <TextField
          id="1"
          label="I learned..."
          helperText="Example: React"
          fullWidth
        /> 
      </div>
      <div className="input-cell">
        <TextField
        fullWidth
        id="1"
        label="From..."
        helperText="Example:  https://www.udemy.com/react-redux/"
        /> 
      </div>
        </CardContent>
      </Card>
      <Card
      className="card-cell"
      >
        <CardContent
        className="card-cell-content"
        >
        <div className="input-cell">
        <TextField
          id="1"
          label="I learned..."
          helperText="Example: Node"
          fullWidth
        /> 
      </div>
      <div className="input-cell">
        <TextField
        fullWidth
        id="1"
        label="From..."
        helperText="Example: https://medium.com/the-node-js-collection/tagged/tutorial"
        /> 
      </div>
        </CardContent>
      </Card>
      
      
      </div>
      
      <div></div>
      </div>
    );
  }
}

export default App;
