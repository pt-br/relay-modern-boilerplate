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
        <Phones allPhones={this.props.allPhones}/>
      </Container>
    );
  }
}

export default Home;
