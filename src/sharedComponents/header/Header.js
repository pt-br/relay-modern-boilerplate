import React, { Component } from 'react';
import styled from 'styled-components';

import HeaderTitle from './components/HeaderTitle';

const Container = styled.div`
  clear: both;
`;

class Header extends Component {
  constructor(props) {
    super(props);

    this.currentRoute = window.location.pathname;
    this.excludedRoutes = [
      '/page-without-header-example',
    ];
  }

  
  render() {
    return (
      <Container>
        {this.excludedRoutes.includes(this.currentRoute) ? null : (
          <HeaderTitle>
            I'm the header
          </HeaderTitle>
        )}
      </Container>
    );
  }
}

export default Header;
