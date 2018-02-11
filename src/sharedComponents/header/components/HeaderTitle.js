import React, { Component } from 'react';

class HeaderTitle extends Component {

  render() {
    const { children } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  }
}

export default HeaderTitle;
