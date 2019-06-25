import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent'
import CharComponent from './CharComponent'
import './App.css';

class App extends Component {
  state = {count: 0, word: ""};

  updateWord = (value) => {
    var newCount = value.length;
    this.setState({
      count: newCount,
      word: value
    });
  }

  removeChar = (charIndex) => {
    let currentWordArray = this.state.word.split('');
    currentWordArray.splice(charIndex, 1);
    this.updateWord(currentWordArray.join(''));
  }
  

  render() {
    let chars = this.state.word.split('')
    const charComponents = (
      <div>
        {chars.map( (char, charIndex) => {
          return <CharComponent
            char={char}
            key={charIndex}
            click={() => this.removeChar(charIndex)} />
        }
        )}
      </div>
    )
    return (
      <div className="App">
        <input onChange={(event) => this.updateWord(event.target.value)} type="text" value={this.state.word}/>
        <p>{this.state.count}</p>
        <ValidationComponent length={this.state.count}/>
        {charComponents}
      </div>
    );
  }
}

export default App;
