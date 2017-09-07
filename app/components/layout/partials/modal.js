import React, {Component} from 'react';


class Modal extends Component {

  constructor() {
    super();

    this.state = {
      isActive: false
    };
  }

  componentDidMount() {};

  render() {
    return(
      <div className={"modal__container" + (this.props.isVisible ? " isVisible" : "") }>

        <div className={"modal__curtain" + (this.props.isVisible ? " isVisible" : "") }
             onClick={this.props.onReject}> </div>

        <div className={"modal__messagebox" + (this.props.isVisible ? " isVisible" : "") }>
          <h1>{this.props.title}</h1>
          <p>{this.props.message}</p>

          <div className="modal__button-container">
            <button className="modal__button confirm"
                    onClick={this.props.onConfirm}>
              Confirm
            </button>
            <button className="modal__button reject"
                    onClick={this.props.onReject}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;