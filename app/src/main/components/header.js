// functional components
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactSVG from 'react-svg';
import {HowToUseText} from '../../../data/modal-text';
import store from '../../../store';
import * as generalAction from '../actions';

// child components
import Modal from './modal';
import FaQuestion from 'react-icons/lib/fa/question';
import Share from './share';
import ToggleButton from 'react-toggle-button';
import ReactPlayer from 'react-player';


class Header extends Component {

  constructor() {
    super();

    this.state = {
      showHowToUse: false,
      showLogin: false,
      showRegister: false,
      tooltipIsOn: false,
      classVideoVisible: ""
    };

    this._hideHowToUse = this._hideHowToUse.bind(this);
    this._showHowToUse = this._showHowToUse.bind(this);
    this.toggleTooltip = this.toggleTooltip.bind(this);
  }

  _showHowToUse() {
    this.setState({
      showHowToUse: true,
      classVideoVisible: "isVisible"
    });
  }

  _hideHowToUse() {
    this.setState({
      showHowToUse: false,
      classVideoVisible: ""
    });
  }

  _showLogin() {
    this.setState({
      showLogin: true
    });
  }

  _hideLogin() {
    this.setState({
      showLogin: false
    });
  }

  _showRegister() {
    this.setState({
      showRegister: true
    });
  }

  _hideRegister() {
    this.setState({
      showRegister: false
    });
  }

  toggleTooltip() {
    this.setState({
      tooltipIsOn: !this.state.tooltipIsOn
    }, () => {
      if(this.state.tooltipIsOn) {
        store.dispatch(generalAction.tooltipOn());
      } else {
        store.dispatch(generalAction.tooltipOff());
      }
    });
  }

  render() {
    const {classVideoVisible} = this.state;

    let howToUse =
      <ReactPlayer
        url={"https://www.youtube.com/watch?v=Wcg4J60LyPI"}
        playing={this.state.showHowToUse}
      />;
      // <Modal
      //   {...HowToUseText}
      //   isVisible = {this.state.showHowToUse}
      //   onReject = {this._hideHowToUse}
      //   onConfirm = {this._hideHowToUse} />

    let temp_hide = {
      display: 'none'
    };

    let toggle =
      <ToggleButton
        inactiveLabel={'OFF'}
        activeLabel={'ON'}
        value={this.state.tooltipIsOn || false}
        onToggle={this.toggleTooltip} />;

    return(
      <div className="header">
        <div className="header__logo">
          <h1>Frets to Keys</h1>
          <ReactSVG
            path="./svg/rock.svg"
            className="logo"
            style={{width: 55, height: 55, display: 'inline-block'}}
          />
        </div>

        <div className="header__nav">
          <ul className="nav__container">
            <li className="nav__item how-to-use"
              style={temp_hide}>
              Tooltips
              {toggle}
            </li>
            <li className="nav__item --how-to-use"
              onClick={this._showHowToUse.bind(this)}>
              How to use
              <FaQuestion />
            </li>
            <li className="nav__item share">
              <Share />
            </li>
            <li className="nav__item"
              style={temp_hide}
              onClick={this._showRegister.bind(this)}>
              Register
            </li>
          </ul>
        </div>
        <div className={`modal__curtain ${classVideoVisible}` }
          onClick={this._hideHowToUse.bind(this)}> </div>

        <div className={`howToUse__video-container ${classVideoVisible}`}>
          <p onClick={this._hideHowToUse.bind(this)}>CLOSE</p>
          {howToUse}
        </div>
      </div>
    );
  }
}

export default Header;
