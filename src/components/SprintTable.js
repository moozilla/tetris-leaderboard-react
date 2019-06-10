import React from 'react';
import { Container, Title, Table } from 'bloomer';

function SprintTable() {
  const rows = [{ name: 'pwn', time: '29s' }, { name: 'old pwn', time: '30s' }];
  return (
    <Container>
      <Title>Sprint</Title>
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
          {rows.map((row, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{row.name}</td>
              <td>{row.time}</td>
              <td>WWC</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default SprintTable;
