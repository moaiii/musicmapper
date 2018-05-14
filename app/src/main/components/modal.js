import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {

  constructor () {
    super();

    this.state = {};
  }

  componentDidMount () {}

  render () {
    const {isVisible, onReject, title,
      message, onConfirm, confirmText,
      hideRejectButton, rejectText} = this.props;

    return(
      <div className={"modal__container" +
            (isVisible ? " isVisible" : "") }>
        <div className={"modal__curtain" +
              (isVisible ? " isVisible" : "") }
        onClick={onReject}> </div>
        <div className={"modal__messagebox" +
              (isVisible ? " isVisible" : "") }>
          <h1>{title}</h1>
          <p>{message}</p>
          <div className="modal__button-container">
            <button className="modal__button confirm"
              onClick={onConfirm}>
              {confirmText}
            </button>
            {!hideRejectButton ?
              <button className="modal__button reject"
                onClick={onReject}>
                {rejectText}
              </button> :
              null
            }
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  isVisible: PropTypes.bool,
  title: PropTypes.string,
  onReject: PropTypes.func,
  onConfirm: PropTypes.func,
  message: PropTypes.string,
  confirmText: PropTypes.string,
  hideRejectButton: PropTypes.bool,
  rejectText: PropTypes.string
};

export default Modal;
