import React, { Component } from 'react';
import './assets/css/style.css';
import Header from './components/header';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
