import React, { Component } from 'react';
import Map from './components/Map';
import AppBar from './components/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
});

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar/>
        <Map />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
