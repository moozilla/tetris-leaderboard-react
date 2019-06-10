import React from 'react';
import { Container, Footer, Content, Column, Columns } from 'bloomer';

function AppFooter() {
  return (
    <Footer>
      <Container>
        <Content>
          <Columns>
            <Column>
              <p>
                Developed by <a href="#/about">pwn</a>
              </p>
            </Column>
          </Columns>
          <Content isSize="small">
            <p>
              The source code is licensed under{' '}
              <a href="https://opensource.org/licenses/mit-license.php">MIT</a>.
            </p>
            <p>
              The website content is licensed under{' '}
              <a href="https://creativecommons.org/licenses/by/4.0/">
                CC BY 4.0
              </a>
              .
            </p>
          </Content>
        </Content>
      </Container>
    </Footer>
  );
}

export default AppFooter;
