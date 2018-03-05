import React, { Component } from 'react';
import '../css/app.css';
import 'typeface-roboto'
import {TextField, Card, CardContent, AppBar, Toolbar, Typography} from 'material-ui'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class App extends Component {
  
  render() {
    return (
      <div>
      <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit">
          What I Learned, Today
        </Typography>
      </Toolbar>
    </AppBar>
      <div className="container">
      <div></div>
      <div className="center-container">
      <Card
      className="card-cell"
      >
        <CardContent
        className="card-cell-content"
        >
        <TextField
          id="1"
          label="I learned..."
          helperText="Example: CSS grid"
          fullWidth
        /> 
      
        <TextField
        fullWidth
        id="1"
        label="From..."
        helperText="Example: Wes Bos"
        /> 
        </CardContent>
      </Card>
      <Card
      className="card-cell"
      >
        <CardContent
        className="card-cell-content"
        >
        <TextField
          id="1"
          label="I learned..."
          helperText="Example: React"
          fullWidth
        /> 
        <TextField
        fullWidth
        id="1"
        label="From..."
        helperText="Example:  https://www.udemy.com/react-redux/"
        /> 
        </CardContent>
      </Card>
      <Card
      className="card-cell"
      >
        <CardContent
        className="card-cell-content"
        >
        <TextField
          id="1"
          label="I learned..."
          helperText="Example: Node"
          fullWidth
        /> 
        <TextField
        fullWidth
        id="1"
        label="From..."
        helperText="Example: https://medium.com/the-node-js-collection/tagged/tutorial"
        /> 
        </CardContent>
      </Card>
      </div>
      <div></div>
      </div>
      </div>
    );
  }
}

export default App;

