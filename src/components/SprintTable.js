import React from 'react';
import { Container, Title, Table, Notification, Icon } from 'bloomer';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const RANKINGS_QUERY = gql`
  {
    rankings(count: 10) {
      username
      score
    }
  }
`;

function SprintTable() {
  return (
    <Container>
      <Title>Sprint</Title>
      <Query query={RANKINGS_QUERY}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <Notification key="loading">
                <Icon
                  className="fas fa-spinner fa-pulse"
                  style={{ verticalAlign: 'bottom', paddingRight: '1rem' }}
                />
                <span>Loading leaderboard data...</span>
              </Notification>
            );
          if (error)
            return (
              <Notification isColor="danger" key="error">
                <Icon
                  className="fas fa-exclamation-triangle"
                  style={{ verticalAlign: 'bottom', paddingRight: '1rem' }}
                />
                <span>Error: Couldn't load leaderboard data.</span>
              </Notification>
            );
          return (
            <Table isStriped className="is-fullwidth">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Game</th>
                </tr>
              </thead>
              <tbody>
                {data.rankings.map((row, i) => (
                  <tr key={row.username + i}>
                    <td>{i + 1}</td>
                    <td>{row.username}</td>
                    <td>{row.score / 1000}</td>
                    <td>WWC</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          );
        }}
      </Query>
    </Container>
  );
}

export default SprintTable;
