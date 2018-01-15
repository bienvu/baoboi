import React, { Component } from 'react';
import Link from 'gatsby-link'
import blueLogo from '../../../ffw-logo.svg'
import whiteLogo from '../../../logo.png'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isExpaned: false};

    // This binding is necessary to make `this` work in the callback
    this.menuClick = this.menuClick.bind(this);
  }

  menuClick() {
    this.setState(prevState => ({
      isExpaned: !prevState.isExpaned
    }));
  }

  render() {
    let headerClass = 'header';
    if (!this.state.isExpaned) {
      headerClass = 'header';
    } else {
      headerClass += ' is-active'
    };

    return (
      <div>
        <header className={headerClass}>
          <div className="container">
            <div className="header__logo">
              <div className="block-branding">
                <div className="group-logo">
                  <Link to="/" className="site-logo">
                    <img
                      src={blueLogo}
                      alt={`FFW Sites`}
                    />
                  </Link>
                  <Link to="/" className="site-logo-white">
                    <img
                      src={whiteLogo}
                      alt={`FFW Sites`}
                    />
                  </Link>
                </div>
                <span className="menu-icon js-toggle-menu" onClick={this.menuClick}>
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
              </div>
            </div>
            <div className="header__menu">
              <div className='header__menu__inner'>
                <div className="menu--main menu--primary_menu">
                  <ul className="menu">
                    <li className="menu__item">
                      <Link to="/">Work</Link>
                    </li>
                    <li className="menu__item">
                      <Link to="/">Services</Link>
                    </li>
                    <li className="menu__item">
                      <Link to="/">Resources</Link>
                    </li>
                    <li className="menu__item">
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li className="menu__item">
                      <Link to="/about">About</Link>
                    </li>
                    <li className="menu__item">
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header
