import React from 'react';

export class Todo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="list-group">
        <div href="#" className="list-group-item active">
          <i className="glyphicon glyphicon-align-left"></i> Todo
        </div>
        <div href="#" className="list-group-item">Dapibus ac facilisis in</div>
        <div href="#" className="list-group-item">Morbi leo risus</div>
        <div href="#" className="list-group-item">Porta ac consectetur ac</div>
        <div href="#" className="list-group-item">Vestibulum at eros</div>
      </div>
    );
  }
}
