import React from 'react';
import './App.scss';
import { sfx } from './sound-info.js';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <DrumMachine />
      </div>
    );
  }
}

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      name: ''
    }
    this.handlePadClick = this.handlePadClick.bind(this);
  }

  handlePadClick(key) {
    this.setState(
      {
        key,
        name: sfx[key].name
      }
    );
  }

  render() {
    return (
      <div id="drum-machine">
        <DrumContainer handlePadClick={this.handlePadClick} sfx={sfx} />
        <Controller soundName={this.state.name} />
      </div>
    );
  }
}

class DrumContainer extends React.Component {

  render() {
    return (
      <div id="drum-container">
        <DrumPad keyName={'Q'} handlePadClick={this.props.handlePadClick} src={this.props.sfx.Q.src} />
        <DrumPad keyName={'W'} handlePadClick={this.props.handlePadClick} src={this.props.sfx.W.src} />
        <DrumPad keyName={'E'} handlePadClick={this.props.handlePadClick} src={this.props.sfx.E.src} />
        <DrumPad keyName={'A'} handlePadClick={this.props.handlePadClick} src={this.props.sfx.A.src} />
        <DrumPad keyName={'S'} handlePadClick={this.props.handlePadClick} src={this.props.sfx.S.src} />
        <DrumPad keyName={'D'} handlePadClick={this.props.handlePadClick} src={this.props.sfx.D.src} />
        <DrumPad keyName={'Z'} handlePadClick={this.props.handlePadClick} src={this.props.sfx.Z.src} />
        <DrumPad keyName={'X'} handlePadClick={this.props.handlePadClick} src={this.props.sfx.X.src} />
        <DrumPad keyName={'C'} handlePadClick={this.props.handlePadClick} src={this.props.sfx.C.src} />
      </div>
    );
  }
}

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyName.charCodeAt(0)) {
      const element = document.getElementById(`drum-pad-${this.props.keyName}`);
      element.click();
    }
  }

  playSound() {
    const audio = document.getElementById(this.props.keyName);
    audio.click();
    audio.currentTime = 0;
    audio.play();

    //make click effect
    const element = audio.parentNode;
    element.style.backgroundColor = "#6e788d";
    setTimeout(() => {
      element.style.backgroundColor = "#474e5c";
    }, 100);

    this.props.handlePadClick(this.props.keyName);
  }

  render() {
    return (
      <div className="drum-pad" id={`drum-pad-${this.props.keyName}`} onClick={this.playSound}>
        {this.props.keyName}
        <audio src={this.props.src} className="clip" id={this.props.keyName} />
      </div>

    )
  }
}

class Controller extends React.Component {
  render() {
    return (
      <div id="display">
        {this.props.soundName}
      </div>
    );
  }
}

export default App;