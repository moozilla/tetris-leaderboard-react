import React from 'react';
import AppNavbar from './AppNavbar';
import { Container, Title, Subtitle, Section, Table } from 'bloomer';

function App() {
  return (
    <React.Fragment>
      <AppNavbar />
      <Section>
        <Container>
          <Title>Tetris Global Leaderboards</Title>
          <Subtitle>the best players from every game</Subtitle>
        </Container>
      </Section>
    </React.Fragment>
  );
}

export default App;
