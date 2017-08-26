// import './Todo.scss';

import React from 'react';

import { Addtodo } from './Addtodo';

export class Todo extends React.Component {
  constructor(props) {
    super();
    this.state = { todolist: props.todos };
    this.updateTodos = this.updateTodos.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  updateTodos(text){
    let updateTodolist = this.state.todolist;
    updateTodolist.push(text);
    this.setState({todolist: updateTodolist});
    this.updateTodoSTorage(updateTodolist);
  }

  deleteTodo(elem){
    let value = elem.target.parentNode.querySelector('span').innerText;
    let updateTodolist = this.state.todolist;
    updateTodolist.splice(updateTodolist.indexOf(value), 1);
    this.setState({todolist: updateTodolist});
    this.updateTodoSTorage(updateTodolist);
  }

  updateTodoSTorage(updateTodolist) {
    console.log('update my storage ', updateTodolist);
    localStorage.setItem('storedTodos', JSON.stringify(updateTodolist));
  }

  // <a className="pull-right" onClick={this.deleteTodo}>x <i className="glyphicon glyphicon-trash"></i></a>
  render() {
    var todos = this.state.todolist.map((elem, i) => {
      return <li className="list-group-item" key={i}>
        <span>{elem}</span>
        <a className="pull-right" onClick={this.deleteTodo}>X</a>
      </li>;
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
