import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import ReactSVG from 'react-svg'

class Header extends Component {

  constructor() {
    super();
  }

  render() {
    return(
      <div className="header">
        <div className="header__logo">
          <h1>Music Mapper</h1>
          <ReactSVG
            path="./svg/rock.svg"
            className="example"
            style={{ width: 55, height: 55, display: 'inline-block' }}
          />
        </div>

        <div className="header__nav">
          <ul className="nav__container">
            <li className="nav__item">How to use</li>
            <li className="nav__item">Login</li>
            <li className="nav__item">Signup</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;