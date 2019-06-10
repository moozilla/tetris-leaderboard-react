import React, { useState } from 'react';
import {
  Icon,
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarBurger,
  NavbarMenu,
  NavbarStart,
  NavbarLink,
  NavbarDropdown,
  NavbarDivider,
  NavbarEnd
} from 'bloomer';

function AppNavbar() {
  const URL_GITHUB = 'https://github.com/moozilla/tetris-leaderboard-react';
  const URL_TWITTER = 'https://twitter.com/spikeman';

  const [isNavActive, setIsNavActive] = useState(false);
  const onClickNav = () => setIsNavActive(!isNavActive);
  return (
    <Navbar className="is-primary">
      <NavbarBrand>
        <NavbarItem>tspin.me</NavbarItem>
        <NavbarBurger isActive={isNavActive} onClick={onClickNav} />
      </NavbarBrand>
      <NavbarMenu isActive={isNavActive} onClick={onClickNav}>
        <NavbarStart>
          <NavbarItem href="#/">Leaderboards</NavbarItem>
          <NavbarItem href="#/fumen">Fumen</NavbarItem>
          <NavbarItem hasDropdown isHoverable>
            <NavbarLink href="#/about">About</NavbarLink>
            <NavbarDropdown isPaddingless>
              <NavbarItem href="#/about">About tspin.me</NavbarItem>
              <NavbarDivider isHidden="desktop" />
              <NavbarItem href={URL_GITHUB} isHidden="desktop">
                <Icon className="fab fa-github" />
                <span style={{ verticalAlign: 'text-bottom' }}>
                  View this project on GitHub
                </span>
              </NavbarItem>
              <NavbarItem href={URL_TWITTER} isHidden="desktop">
                <Icon className="fab fa-twitter" style={{ color: '#55acee' }} />
                <span style={{ verticalAlign: 'text-bottom' }}>
                  Checkout my Twitter
                </span>
              </NavbarItem>
            </NavbarDropdown>
          </NavbarItem>
        </NavbarStart>
        <NavbarEnd>
          <NavbarItem href={URL_GITHUB} isHidden="touch">
            <Icon className="fab fa-github" />
          </NavbarItem>
          <NavbarItem href={URL_TWITTER} isHidden="touch">
            <Icon className="fab fa-twitter" />
          </NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </Navbar>
  );
}

export default AppNavbar;
