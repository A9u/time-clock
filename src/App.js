import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginForm />
      </div>
    );
  }
}

export default App;
