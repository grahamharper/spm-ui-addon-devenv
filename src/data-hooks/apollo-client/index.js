/*
 * Licensed Materials - Property of IBM
 *
 * PID 5725-H26
 *
 * Copyright IBM Corporation 2020. All Rights Reserved.
 *
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import PeopleDataProvider from './samples/Person';
import LogoDataProvider from './samples/Logo';
import ApolloClientConfig from './core/ApolloClientConfig';

const RenderWithApolloClient = (container, configuration, DataProvider) => {
  const apolloClient = ApolloClientConfig.getConfig(configuration);
  
  ReactDOM.render(
    React.createElement(DataProvider, {
      apolloClient,
      configuration
    }),
    container
  );
};

const RenderLogoWithApolloClient = (container, configuration) => {
  RenderWithApolloClient(container, configuration, LogoDataProvider);
};


const RenderPersonWithApolloClient = (container, configuration) => {
  RenderWithApolloClient(container, configuration, PeopleDataProvider);
};

export { RenderLogoWithApolloClient, RenderPersonWithApolloClient };
