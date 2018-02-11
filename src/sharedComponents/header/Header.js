import React, { Component } from 'react';
import HeaderTitle from './components/HeaderTitle';

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
      <div>
        {this.excludedRoutes.includes(this.currentRoute) ? null : (
          <HeaderTitle>
            I'm the header
          </HeaderTitle>
        )}
      </div>
    );
  }
}

export default Header;
