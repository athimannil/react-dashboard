import React from 'react';

import { Todo } from './Todo/Todo';

export class Home extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Todo />
          </div>
        </div>
      </div>
    );
  }
}

// <Todo />
