import React, { Component } from 'react';
import ReactDOM from 'react-dom'


class Login extends Component {

  constructor() {
    super();
  }

  _handleChange(event) {
    this.setState({value: event.target.value});// expand for all the form elements
  };

  _login() {};

  render() {
    return (
      <div className={`login ${this.props.isVisible ? "isVisible" : ""}`}>
        <div className={"modal__curtain" + 
              (this.props.isVisible ? " isVisible" : "") }
            onClick={this.props.onReject}> </div>
        <div className="login__container">
          <h1 className="login__title">login</h1>
          <form className="login__form" 
                method="post" 
                action="">
            <div className="form-group">
              <label>Email</label>
              <input onChange={this._handleChange}
                    type="email" 
                    className="form-control" 
                    placeholder="Email"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input onChange={this._handleChange}
                    type="text" 
                    className="form-control" 
                    placeholder="password"/>
            </div>
            <button onClick={this._login}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;