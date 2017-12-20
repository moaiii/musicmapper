// Functional modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

// Child modules
import FaYoutube from 'react-icons/lib/fa/youtube';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaSoundcloud from 'react-icons/lib/fa/soundcloud';


class Footer extends Component {

  constructor() {
    super();
  }

  _handleClick(type) {
    console.log('click', type);

    let url = "";

    switch(type) {
      case "twitter":
        url = "https://twitter.com/___moaiii";
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

    let iconStyle = { 
      width: 15, 
      height: 15, 
      display: 'inline-block' 
    };

    return (
      <div className="footer">
        <div className="contact__container">
          <div className="icon__container" 
               onClick={this._handleClick.bind(this, "twitter")}>
            <FaTwitter
              className="icon"
              style={iconStyle}/>
          </div>
          <div className="icon__container" 
               onClick={this._handleClick.bind(this, "soundcloud")}>
            <FaSoundcloud
              className="icon"
              style={iconStyle}/>
          </div>
          <div className="icon__container" 
               onClick={this._handleClick.bind(this, "youtube")}>
            <FaYoutube
              className="icon"
              style={iconStyle}
            />
          </div>
          <div className="icon__container" 
               onClick={this._handleClick.bind(this, "instagram")}>
            <FaInstagram
              className="icon"
              style={iconStyle}
            />
          </div>
          <div className="icon__container" 
               onClick={this._handleClick.bind(this, "facebook")}>
            <FaFacebook
              className="icon"
              style={iconStyle}
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