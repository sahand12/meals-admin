import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ResourcePanel from './components/ResourcePanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ResourcePanel />
      </div>
    );
  }
}

export default App;
