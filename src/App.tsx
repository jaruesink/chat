import React from 'react';
import './App.scss';
import { Chat } from './Chat/Chat';
import { Login } from './Login/Login';

function App() {
  return (
    <div className='App'>
      <h1>Chat</h1>
      <Login />
      <br />
      <br />
      <Chat />
    </div>
  );
}

export default App;
