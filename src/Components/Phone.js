import React, {Component} from 'react';
import {
  graphql,
  createFragmentContainer
} from 'react-relay';

class Phone extends Component {

  render() {
    const { phoneId, model, image } = this.props;

    return (
      <div>
        <div>X</div>
        <div>
          <div>
            <img src={image} />
          </div>
          <div>Model: {model}</div>
        </div>
      </div>
    );
  }
}

export default Phone;
