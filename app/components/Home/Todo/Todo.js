// import './Todo.scss';

import React from 'react';

import { Addtodo } from './Addtodo';

export class Todo extends React.Component {
  constructor(props) {
    super();
    this.state = { todolist: props.todos };
    this.updateTodos = this.updateTodos.bind(this);
  }

  updateTodos(text){
    var updateTodolist = this.state.todolist;
    updateTodolist.push(text);
    this.setState({todolist: updateTodolist});
  }

  render() {
    var todos = this.state.todolist.map((elem, i) => {
      return <li className="list-group-item" key={i}>{elem}</li>;
    });
    return (
      <ul className="list-group">
        <li href="#" className="list-group-item active">
          <i className="glyphicon glyphicon-align-left"></i> Todo
        </li>
        {todos}
        <li className="list-group-item" style={{padding: 0, border: 'none'}}>
          <Addtodo updateTodo={this.updateTodos} />
        </li>
      </ul>
    );
  }
}
