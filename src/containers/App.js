import React, { Component } from "react";

import MenuAppBar from "../containers/MenuAppBar";
import ListThreads from "../components/ListThreads";
import { Grid } from "../../node_modules/@material-ui/core";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuAppBar />
        <Grid container spacing={8}>
          <Grid item xs />
          <Grid item xs={6}>
            <ListThreads />
          </Grid>
          <Grid item xs />
        </Grid>
      </div>
    );
  }
}

export default App;
