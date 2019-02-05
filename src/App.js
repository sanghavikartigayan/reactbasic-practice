import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Sanghavi'
  }

  nameChangedHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (

      <div className="App">
        <h1> A small React application</h1>
        <p>User Input:</p>
         <UserInput
          currentName ={this.state.username}
          changed={this.nameChangedHandler}/> 
         <p>User output:</p>
         <UserOutput username={this.state.username}/> 
         <UserOutput username= 'Nijesh'/>
      </div>
    );
  }
}

export default App;
