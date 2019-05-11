import React from 'react';
import { Root } from 'native-base'
import Navigation from './Navigation'

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <Navigation />
      </Root>
    );
  }
}