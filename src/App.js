import React from 'react';
import './App.scss';

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
  render() {
    return (
      <div id="drum-machine">
        <DrumContainer />
        <Controller/>
      </div>
    );
  }
}

class DrumContainer extends React.Component {
  render() {
    return (
      <div id="drum-container">
        <DrumPad text={'Q'}/>
        <DrumPad text={'W'}/>
        <DrumPad text={'E'}/>
        <DrumPad text={'A'}/>
        <DrumPad text={'S'}/>
        <DrumPad text={'D'}/>
        <DrumPad text={'Z'}/>
        <DrumPad text={'X'}/>
        <DrumPad text={'C'}/>
      </div>
    );
  }
}

class DrumPad extends React.Component{
  render(){
    return(
      <div className="drum-pad">{this.props.text}</div>
    )
  }
}

class Controller extends React.Component {
  render(){
    return(
      <div id="controller">

      </div>
    );
  }
}

export default App;