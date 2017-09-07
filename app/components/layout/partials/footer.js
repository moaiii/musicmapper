import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import ReactSVG from 'react-svg'


class Footer extends Component {

  constructor() {
    super();
  }

  _handleClick(type) {
    console.log('click', type);

    let url = "";

    switch(type) {
      case "twitter":
        url = "https://twitter.com/moaimsc";
        break;
      case "soundcloud":
        url = "https://soundcloud.com/moai_music";
        break;
      case "youtube":
        url = "https://www.youtube.com/user/MrMelvi87";
        break;
      case "instagram":
        url = "https://www.instagram.com/_moaiii/";
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

  render() {
    return (
      <div className="footer">
        <div className="contact__container">
          <p>Contact: </p>
          <div className="icon__container" onClick={this._handleClick.bind(this, "twitter")}>
            <ReactSVG
              social={"twitter"}
              path="./svg/twitter-logo.svg"
              className="icon"
              style={{ width: 20, height: 20, display: 'inline-block' }}/>
          </div>
          <div className="icon__container" onClick={this._handleClick.bind(this, "soundcloud")}>
            <ReactSVG
              social={"soundcloud"}
              path="./svg/soundcloud-logo.svg"
              className="icon"
              style={{ width: 20, height: 20, display: 'inline-block' }}/>
          </div>
          <div className="icon__container" onClick={this._handleClick.bind(this, "youtube")}>
            <ReactSVG
              social={"youtube"}
              path="./svg/youtube-logo.svg"
              className="icon"
              style={{ width: 20, height: 20, display: 'inline-block' }}
            />
          </div>
          <div className="icon__container" onClick={this._handleClick.bind(this, "instagram")}>
            <ReactSVG
              social={"instagram"}
              path="./svg/instagram-logo.svg"
              className="icon"
              style={{ width: 20, height: 20, display: 'inline-block' }}
            />
          </div>
          <div className="icon__container" onClick={this._handleClick.bind(this, "facebook")}>
            <ReactSVG
              social={"facebook"}
              path="./svg/facebook-logo.svg"
              className="icon"
              style={{ width: 20, height: 20, display: 'inline-block' }}
            />
          </div>
        </div>
        <div className="copyright__container">
          <p>Copyright © 2017</p>
        </div>
      </div>
    )
  }
}

export default Footer;