import React, { Component } from 'react';
import GussedWords from './components/GussedWords/GussedWords';
import Congrats from './components/Congrats/Congrats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='container' data-test='component-app'>
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GussedWords
          gussedWords={[{ gussedWord: 'train', letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}

export default App;
