import React from 'react';

import { Todo } from './Todo/Todo';

const todolist = ['first task', 'second task', 'Final tassk'];

export class Home extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Todo todos={todolist} />
          </div>
        </div>
      </div>
    );
  }
}
