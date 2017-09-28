import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import ReactSVG from 'react-svg'
import Modal from './modal';
import {HowToUseText} from '../../../data/modal-text';
import FaQuestion from 'react-icons/lib/fa/question';
import Register from '../../../auth/register';
import Login from '../../../auth/login';

class Header extends Component {

  constructor() {
    super();

    this.state = {
      showHowToUse: false,
      showLogin: false,
      showRegister: false
    };

    this._hideHowToUse = this._hideHowToUse.bind(this);
    this._showHowToUse = this._showHowToUse.bind(this);
  }

  _showHowToUse() {
    this.setState({
      showHowToUse: true
    })
  }

  _hideHowToUse() {
    this.setState({
      showHowToUse: false
    })
  }

  _showLogin() {
    this.setState({
      showLogin: true
    })
  }

  _hideLogin() {
    this.setState({
      showLogin: false
    })
  }

  _showRegister() {
    this.setState({
      showRegister: true
    })
  }

  _hideRegister() {
    this.setState({
      showRegister: false
    })
  }

  render() {

    let howToUse =
      <Modal 
        {...HowToUseText}
        isVisible = {this.state.showHowToUse}
        onReject = {this._hideHowToUse}
        onConfirm = {this._hideHowToUse} />

    let temp_hide = {
      display: 'none'
    }    

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
            <li className="nav__item how-to-use" 
                onClick={this._showHowToUse.bind(this)}>
                <FaQuestion />
              How to use
            </li>
            <li className="nav__item"
                style={temp_hide}
                onClick={this._showLogin.bind(this)}>
              Login
            </li>
            <li className="nav__item"
                style={temp_hide}
                onClick={this._showRegister.bind(this)}>
              Register
            </li>
          </ul>
        </div>

        <div className={`app__auth ${this.state.showLogin || this.state.showRegister ? " isVisible" : " "}`}>
          <Register isVisible={this.state.showRegister}/>
          <Login isVisible={this.state.showLogin}/>
        </div>
        {howToUse}
      </div>
    )
  }
}

export default Header;