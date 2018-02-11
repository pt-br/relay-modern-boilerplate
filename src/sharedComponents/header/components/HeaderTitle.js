import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  clear: both;
`;

class HeaderTitle extends Component {

  render() {
    const { children } = this.props;

    return (
      <Container>
        {children}
      </Container>
    );
  }
}

export default HeaderTitle;
