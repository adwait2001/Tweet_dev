import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {TweetComponent} from './tweets'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <TweetComponent />
        </div>
      </header>
    </div>
  );
}

export default App;
