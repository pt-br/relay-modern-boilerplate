import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';
import React from 'react';
import { graphql } from 'react-relay';

import Home from '../pages/home/Home';
import AnotherPage from '../pages/anotherPage/AnotherPage';

const query = graphql`
  query RoutesQuery {
    viewer {
      ...Phones_viewer
    }
  }
`;

export default makeRouteConfig(
  <Route path="/">
    <Route Component={Home} query={query} />
    <Route path="page-without-header-example">
      <Route Component={AnotherPage} query={query} />
    </Route>
  </Route>,
)
