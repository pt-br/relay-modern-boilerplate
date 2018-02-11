import React, { Component } from 'react';
import BrowserProtocol from 'farce/lib/BrowserProtocol';
import queryMiddleware from 'farce/lib/queryMiddleware';
import createFarceRouter from 'found/lib/createFarceRouter';
import createRender from 'found/lib/createRender';
import { Resolver } from 'found-relay';
import styled from 'styled-components';

import Routes from './Routes';
import environment from './Environment';

import Header from '../sharedComponents/header/Header';

const AppContainer = styled.div`
  clear: both;
`;

const FarceRouter = createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: Routes,
  render: createRender({}),
})

export default class Router extends Component {
  render() {
    return(
      <AppContainer>
        <Header />
        <FarceRouter resolver={new Resolver(environment)}/>
      </AppContainer>
    );
  }
}
