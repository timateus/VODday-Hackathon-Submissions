import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
        <TimeMenu />
        <IndexMenu />
      </div>
    );
  }
}


class Map extends Component {
  render() {
    return (
      <div>
        this is map
      </div>
      );
  }
}


class TimeMenu extends Component {
  render() {
    return (
      <div>
        this is time menue
        <Slider />
        <PlayButton />
      </div>
      );
  }
}

class Slider extends Component {
  render() {
    return (
      <div>
        this is time slider
      </div>
      );
  }
}

class PlayButton extends Component {
  render() {
    return (
      <div>
        this is time play button
      </div>
      );
  }
}


class IndexMenu extends Component {
  render() {
    return (
      <div>
        this is time Index Menu
      </div>
      );
  }
}


export default App;
