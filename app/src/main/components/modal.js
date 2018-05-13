import React, {Component} from 'react';


// @flow 
type Props = {
  isVisible: boolean,
  onReject: () => void,
  onConfirm: () => void,
  title: string,
  message: string,
  confirmText: string,
  rejectText: string,
  hideRejectButton: string
};

type state = {
  hideRejectButton: boolean
}

class Modal extends Component<Props, State> {

  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return(
      <div className={"modal__container" + 
            (this.props.isVisible ? " isVisible" : "") }>

        <div className={"modal__curtain" + 
              (this.props.isVisible ? " isVisible" : "") }
        onClick={this.props.onReject}> </div>

        <div className={"modal__messagebox" + 
              (this.props.isVisible ? " isVisible" : "") }>
          <h1>{this.props.title}</h1>
          <p>{this.props.message}</p>

          <div className="modal__button-container">
            <button className="modal__button confirm"
              onClick={this.props.onConfirm}>
              {this.props.confirmText}
            </button>

            {!this.props.hideRejectButton ? 
              <button className="modal__button reject"
                onClick={this.props.onReject}>
                {this.props.rejectText}
              </button> : 
              null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;