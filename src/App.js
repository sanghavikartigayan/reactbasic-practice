import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';


class App extends Component {
  state = {
    username: 'Sanghavi',
    userinput: ' '
  }

  nameChangedHandler = (event) => {
    this.setState({username: event.target.value});
  }

  inputHandler =(event) => {
      this.setState( {userinput: event.target.value});
  }

  deleteCharacterHandler =(index) => {
    const input = this.state.userinput.split('');
    input.splice(index, 1);
    const newinput = input.join('');
    this.setState({userinput: newinput});
  }


  render() {

    const charList = this.state.userinput.split('').map((ch,index) => {
        return <CharComponent character={ch} key={index}
            clicked={() => this.deleteCharacterHandler(index)} />;
        });

    return (
      <div className="App">
        <h1> A small React application</h1>
        <p>User Input:</p>
         <UserInput
          currentName ={this.state.username}
          changed={this.nameChangedHandler}/> 
         <p>User output:</p>
         <center>
           <UserOutput username={this.state.username}/> 
         </center>
          <hr>
          </hr>
          <br>
          </br>
         <input type="text" placeholder="UserInput" onChange={this.inputHandler}
         value ={this.state.userinput}/>
         <ValidationComponent inputlength ={this.state.userinput.length}/>
      </div>
    );
  }
}

export default App;
