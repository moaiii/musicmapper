import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {newRegistration} from '../api/auth-api';
// debugger;
var bcrypt = require('bcryptjs');



// @ Flow
type state = {};

class Register extends Component {

  constructor() {
    super();

    this.state = {};
  }

  _handleChange(e) {
    let field = e.target.placeholder;
    let value = e.target.value;

    this.setState({
      [field]: value
    })
  };

  _register() {
    debugger;

    // var UserSchema = mongoose.Schema({
    //   name: {
    //     type: String,
    //     index: true
    //   },
    //   email: {
    //     type: String
    //   },
    //   username: {
    //     type: String
    //   },
    //   password: {
    //     type: String
    //   }
    // });

    // var User = mongoose.model('User', UserSchema);

    // module.exports.createUser = function(newUser, callback) {
    //   bcrypt.genSalt(10, function(err, salt) {
    //     bcrypt.hash(newUser.password, salt, function(err, hash) {
    //         newUser.password = hash;
    //         newUser.save(callback);
    //     });
    //   });
    // };

    // let newUser = new User({
    //   name: this.state.name,
    //   email: this.state.email,
    //   username: this.state.username,
    //   password: this.state.password
    // });

    // console.log(newUser);

    // User.createUser(newUser, function(err, user) {
    //   if(err) throw err;
    //   console.log(user);
    // });

    // newRegistration(form);
  }

  render() {
    return (
      <div className={`register ${this.props.isVisible ? "isVisible" : ""}`}>
        <div className={"modal__curtain" + 
              (this.props.isVisible ? " isVisible" : "") }
             onClick={this.props.onReject}> </div>
        <div className="register__container">
          <h1 className="register__title">Register</h1>
          <div className="register__form">
            <div className="form-group">
              <label>Name</label>
              <input onChange={this._handleChange.bind(this)}
                     type="text" 
                     className="form-control" 
                     placeholder="Name"/>
            </div>
            <div className="form-group">
              <label>Username</label>
              <input onChange={this._handleChange.bind(this)}
                     type="text" 
                     className="form-control" 
                     placeholder="Username"/>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input onChange={this._handleChange.bind(this)}
                     type="email" 
                     className="form-control" 
                     placeholder="Email"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input onChange={this._handleChange.bind(this)}
                     type="text" 
                     className="form-control" 
                     placeholder="password"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input onChange={this._handleChange.bind(this)}
                     type="text" 
                     className="form-control" 
                     placeholder="password again"/>
            </div>
            <button onClick={this._register.bind(this)}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;