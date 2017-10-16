import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    }
    // all the binds here:
    // this.handleUsernameChange = this.handleUsernameChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    // this.handleEmailChange = this.handleEmailChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div className="App">

        <div className='form-group login'>
          <input type='text' className="form-control" placeholder='Username' />
          <input type='password' className="form-control" placeholder='Password' />
          <button className='btn' type='submit'>Log In</button>
        </div>

        <div className='form-group signup'>
          <input type='text' className="form-control" placeholder='Username' />
          <input type='email' className="form-control" placeholder='Email' />
          <input type='password' className="form-control" placeholder='Password' />
          <button className='btn' type='submit'>Sign Up</button>
        </div>

      </div>
    );
  }
}

export default App;
