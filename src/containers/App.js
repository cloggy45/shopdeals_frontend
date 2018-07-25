import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import NavBar from '../components/navbar';
import ListThreads from '../containers/ListThreads';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ListThreads />
      </div>
    );
  }
}

export default App;
