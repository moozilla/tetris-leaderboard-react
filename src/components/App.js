import React from 'react';
import AppNavbar from './AppNavbar';
import AppFooter from './AppFooter';
import SprintTable from './SprintTable';
import { Container, Title, Subtitle, Section } from 'bloomer';

function App() {
  return (
    <React.Fragment>
      <AppNavbar />
      <Section>
        <Container>
          <Title isSpaced>Tetris Global Leaderboards</Title>
          <Subtitle>the best players from every game</Subtitle>
        </Container>
      </Section>
      <Section>
        <SprintTable />
      </Section>
      <AppFooter />
    </React.Fragment>
  );
}

export default App;
