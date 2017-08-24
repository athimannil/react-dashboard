import React from 'react';

export class Addtodo extends React.Component {
  constructor() {
    super();
  }

  render(){
    return (
      <li className="list-group-item">
        <form className="input-group">
          <input type="text" className="form-control" />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="submit">
              <i className="glyphicon glyphicon-plus"></i>
            </button>
          </span>
        </form>
      </li>
    );
  }
}
