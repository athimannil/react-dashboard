import React from 'react';

export class NoMatch extends React.Component {
  render () {
    return (
      <div className="container" style={{textAlign: 'center'}}>
        <h1>404</h1>
        <h2>No such page exist</h2>
        <input type="text" className="form-control" />
      </div>
    );
  }
}
