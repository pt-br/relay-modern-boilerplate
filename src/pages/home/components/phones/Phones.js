import React, {Component} from 'react';
import {
  graphql,
  createFragmentContainer
} from 'react-relay';

import Phone from './Phone';

class Phones extends Component {
  render() {
    const { edges } = this.props.viewer.phones;

    return (
      <div>
        {edges.map(edge => {
          const { phoneId, model, image } = edge.node;
          return (
            <Phone
              key={phoneId}
              phoneId={phoneId}
              model={model}
              image={image}
            />
          );
        })}
      </div>
    );
  }
}

const phonesContainer = createFragmentContainer(Phones, {
  viewer: graphql`
    fragment Phones_viewer on User {
      phones {
        edges {
          node {
            id
            phoneId
            model
            image
          }
        }
      }
    }
  `
});

export default phonesContainer;
