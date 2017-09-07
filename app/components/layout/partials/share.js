import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import ReactSVG from 'react-svg'


class Share extends Component {

  constructor() {
    super();
  }

  _handleClick(type) {
    let url = "";

    switch(type) {
      case "twitter":
        url = "https://twitter.com/moaimsc";
        break;
      case "linkedin":
        url = "https://soundcloud.com/moai_music";
        break;
      case "facebook":
        url = "https://www.facebook.com/itsmoai";
        break;
      default:
        url = "https://www.facebook.com/itsmoai";
    }

    let win = window.open(url, '_blank');
    win.focus();
  }

  _clap() {}

  render() {
    return (
      <div className="share">
        <div className="share__container">
          <p>Share: </p>
          <div className="icon__container" onClick={this._handleClick.bind(this, "facebook")}>
            <ReactSVG
              path="./svg/facebook-logo.svg"
              className="icon"
              style={{ width: 30, height: 30, display: 'inline-block' }}/>
          </div>
          <div className="icon__container" onClick={this._handleClick.bind(this, "linkedin")}>
            <ReactSVG
              path="./svg/linkedin-logo.svg"
              className="icon"
              style={{ width: 30, height: 30, display: 'inline-block' }}/>
          </div>
          <div className="icon__container" onClick={this._handleClick.bind(this, "twitter")}>
            <ReactSVG
              path="./svg/twitter-logo.svg"
              className="icon"
              style={{ width: 30, height: 30, display: 'inline-block' }}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Share;