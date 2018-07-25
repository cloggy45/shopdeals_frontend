import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import NavBar from '../components/navbar';
import ThreadCard from './ThreadCard';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ThreadCard />

      </div>
    );
  }
}

export default App;
