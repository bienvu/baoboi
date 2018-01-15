import React, { Component } from 'react';
import Link from 'gatsby-link'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="block-newletter">
            <h2>Stay up to date with our latest news and events</h2>
            <form className="form-newletter">
              <input className="mktoField mktoEmailField mktoHasWidth mktoRequired" id="Email" maxLength="255" name="Email" placeholder="Email Address" type="email" />
              <input className="btn" name="submit" value="Sign Up" type="submit" />
            </form>
          </div>
          <div className="block-social">
            <ul className="block-social__list">
              <li>
                <Link to="/"><i className="icon-facebook"></i></Link>
              </li>
              <li>
                <Link to="/"><i className="icon-twitter"></i></Link>
              </li>
              <li>
                <Link to="/"><i className="icon-instagram"></i></Link>
              </li>
              <li>
                <Link to="/"><i className="icon-linkedin"></i></Link>
              </li>
            </ul>
          </div>
          <div className="navigation menu--footer">
            <ul className="menu">
              <li className="menu__item">
                <a href="/" className="is-active">Home</a>
              </li>
              <li className="menu__item">
                <Link to="/">Work</Link>
              </li>
              <li className="menu__item">
                <Link to="/">Services</Link>
              </li>
              <li className="menu__item">
                <Link to="/">Blog</Link>
              </li>
              <li className="menu__item">
                <Link to="/">About</Link>
              </li>
              <li className="menu__item">
                <Link to="/">News</Link>
              </li>
              <li className="menu__item">
                <Link to="/">Events</Link>
              </li>
              <li className="menu__item">
                <Link to="/">Careers</Link>
              </li>
              <li className="menu__item">
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="block-language">
            <Link to="/" className="block-language__link">English</Link>
          </div>

          <div className="block-footer-info">
            <p>We are a part of the <Link to="http://intellecta.com/">Intellecta Group</Link>. Other companies within the Intellecta Group are <Link to="http://intellecta.com/">Bysted AB</Link>, <Link to="/">Hilanders AB</Link>, Intellecta Corporate AB, ISBIT GAMES AB, Rewir AB, River Cresco AB,&nbsp;Unreel AB and Wow Events AB.Intellecta AB (publ) is noted on NASDAQ OMX Stockholm and employs around 550 people in Sweden, Denmark, Austria, Germany, the Netherlands, UK, Bulgaria, Moldova, Ukraine, Brazil, the US, Vietnam and China.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer
