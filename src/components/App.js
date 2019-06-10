import React from 'react';
import AppNavbar from './AppNavbar';
import AppFooter from './AppFooter';
import { Container, Title, Subtitle, Section, Table } from 'bloomer';

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
        <Container>
          <Title>Sprint</Title>
          <Table isStriped className="is-fullwidth">
            <thead>
              <tr>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ryu</td>
                <td>10000</td>
              </tr>
              <tr>
                <td>Ken</td>
                <td>5000</td>
              </tr>
              <tr>
                <td>Akuma</td>
                <td>1200</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Section>
      <AppFooter />
    </React.Fragment>
  );
}

export default App;
