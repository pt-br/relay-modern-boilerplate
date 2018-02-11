import React, { Component } from 'react';
import styled from 'styled-components';

import Phones from './components/phones/Phones';

const Container = styled.div`
  clear: both;
`;

class Home extends Component {
  render() {
    return (
      <Container>
        <Phones viewer={this.props.viewer}/>
      </Container>
    );
  }
}

export default Home;
