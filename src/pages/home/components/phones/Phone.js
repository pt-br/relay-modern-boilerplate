import React, {Component} from 'react';
import {
  graphql,
  createFragmentContainer
} from 'react-relay';
import styled from 'styled-components';

const Container = styled.div`
  clear: both;
`;

const CloseButton = styled.div`
  display: block;
`;

const PhoneBody = styled.div`
  display: block;
`;

const ImageContainer = styled.div`
  display: block;
`;

const Image = styled.img`
  display: block;
`;

const Model = styled.div`
  display: block;
`;

class Phone extends Component {

  render() {
    const { phoneId, model, image } = this.props;

    return (
      <Container>
        <CloseButton>X</CloseButton>
        <PhoneBody>
          <ImageContainer>
            <Image src={image} />
          </ImageContainer>
          <Model>Model: {model}</Model>
        </PhoneBody>
      </Container>
    );
  }
}

export default Phone;
