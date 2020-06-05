import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import NavBar from './NavBar';

export class NotFound extends Component {
  render() {
    return (
      <Container textAlign="center">
            <NavBar/>
        <Header as="h3">No Match 404 Error</Header>
        <p>Nothing to see here. Please use the menu to try again.</p>
      </Container>
    );
  }
}

export default NotFound;