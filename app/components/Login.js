import React from 'react';

export class Login extends React.Component {
  render () {
    return (
      <div>
        <h1>Login</h1>
        <input type='text' placeholder='Username' />
        <br />
        <input type='password' placeholder='Password' />
        <br />
        <input type='button' value='Submit' />
      </div>
    );
  }
}
