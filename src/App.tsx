import React from 'react';
import './App.css';
import { Increment } from './Increment';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is sample react App
        </p>
        <div>
          <div>Inc Comp:</div>
          <div>
            <Increment></Increment>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
