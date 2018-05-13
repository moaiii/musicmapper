import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaLinkedin from 'react-icons/lib/fa/linkedin';


class Share extends Component {

  constructor() {
    super();
  }

  _onShareItem = function(event) {
    event.preventDefault();
    let network = event.currentTarget.getAttribute('data-network'); 
    let description = "Map your fretboard to your keyboard and download midi"; 
    let href;


    switch (network) {
    case 'facebook':
      href = 'https://www.facebook.com/sharer/sharer.php?u=' + 
        location.href;
      break;
      
    case 'linkedin':
      href = 'https://www.linkedin.com/shareArticle?mini=true&url=' +
        location.href +
        '&title=' + description +
        '&summary=%20&source=';
      break;
      
    case 'twitter':
      href = 'https://twitter.com/intent/tweet?text=' +
        description +
        '&url=' + location.href;
      break;
      
    case 'gplus':
      href = 'https://plus.google.com/share?url=' + 
        location.href;
      break;
    
    default:
      return null;
    }

    window.open(
      href,
      '',
      'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=253,width=600'
    );
  };

  render() {

    let iconStyle = { 
      width: 15, 
      height: 15, 
      display: 'inline-block' 
    };

    return (
      <div className="share">
        <div className="share__container">
          <p>Share: </p>
          <div className="icon__container" 
            onClick={this._onShareItem.bind(this)}
            data-network="facebook" 
            href="/">
            <FaFacebook
              className="icon"
              data-network="facebook" 
              style={iconStyle}/>
          </div>
          <div className="icon__container" 
            onClick={this._onShareItem.bind(this)}
            data-network="linkedin" 
            href="/">
            <FaLinkedin
              className="icon"
              data-network="linkedin" 
              style={iconStyle}/>
          </div>
          <div className="icon__container" 
            onClick={this._onShareItem.bind(this)}
            data-network="twitter" 
            href="/">
            <FaTwitter
              data-network="twitter"
              className="icon"
              style={iconStyle}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Share;