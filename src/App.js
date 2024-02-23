
import React from 'react';
import './App.css';
import A from "./components/A"
import B from "./components/B"
import C from './components/C';
import State from './components/state';


class App extends React.Component {
  render(){

    const korisnici =[{name: "Anto", godina:25}, {name: "Luka", godina:25},{name: "Pero", godina:25},]
    
    return (
      <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <State/>
        <A korisnici ={korisnici}/>
        <B korisnici ={korisnici}/>
        <C
          korisnici ={korisnici}
          />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
