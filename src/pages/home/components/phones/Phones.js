import React, {Component} from 'react';
import {
  graphql,
  createFragmentContainer
} from 'react-relay';
import styled from 'styled-components';

import Phone from './Phone';

const Container = styled.div`
  clear: both;
`;

class Phones extends Component {
  render() {
    const { edges } = this.props.viewer.phones;

    return (
      <Container>
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
      </Container>
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
