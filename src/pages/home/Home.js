import React, { Component } from 'react';
import Phones from './components/phones/Phones';

class Home extends Component {
  render() {
    return (
      <div>
        <Phones viewer={this.props.viewer}/>
      </div>
    );
  }
}

export default Home;
