import React, { Component } from 'react';
import 'normalize.css';
import './App.css';
import './components/Views/Views.css'
import Source from './components/Source/Source'

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="View">
          <div className="wrapper">

          </div>
        </section>

        <section className="Source">
          <Source />
        </section>
      </div>
    );
  }
}

export default App;
