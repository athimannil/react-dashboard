import React from 'react';

import { Todolist } from './Todolist';
import { Addtodo } from './Addtodo';

const todolist = ['first task', 'second task', 'Final tassk'];

export class Todo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ul className="list-group">
        <li href="#" className="list-group-item active">
          <i className="glyphicon glyphicon-align-left"></i> Todo
        </li>
        <Todolist todos={todolist} />
        <Addtodo />
      </ul>
    );
  }
}
