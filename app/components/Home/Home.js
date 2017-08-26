import React from 'react';

import { Todo } from './Todo/Todo';

// var todolist = ['first task', 'second task', 'Final tassk'];
var todolist = [];
var storedTodos = localStorage.getItem('storedTodos');

if (storedTodos) {
  todolist = JSON.parse(storedTodos);
} else {
  localStorage.setItem('storedTodos', JSON.stringify(todolist));
}

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
