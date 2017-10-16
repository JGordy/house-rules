import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className='form-group login'>
          <input type='text' className="form-control" placeholder='Username' />
          <input type='password' className="form-control" placeholder='Password' />
          <button type='submit'>Log In</button>
        </div>

        <div className='form-group signup'>
          <input type='text' className="form-control" placeholder='Username' />
          <input type='email' className="form-control" placeholder='Email' />
          <input type='password' className="form-control" placeholder='Password' />
          <button type='submit'>Sign Up</button>
        </div>

      </div>
    );
  }
}

export default App;
