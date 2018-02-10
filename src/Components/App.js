import React, {Component} from 'react';
import {
  graphql,
  QueryRenderer
} from 'react-relay';
import Phones from './Phones';

class App extends Component {
  render() {
    return (
      <Phones viewer={this.props.viewer}/>
    );
  }
}

export default App;
