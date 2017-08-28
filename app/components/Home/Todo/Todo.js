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
    let updateTodolist = this.state.todolist;
    updateTodolist.unshift(text);
    this.setState({todolist: updateTodolist});
    this.updateTodoSTorage(updateTodolist);
  }

  removeTodo (index) {
    this.setState({
      todolist: this.state.todolist.filter((_, i) => i !== index)
    }, () => {
      this.updateTodoSTorage(this.state.todolist);
    });
  }

  updateTodoSTorage(updateTodolist) {
    localStorage.setItem('storedTodos', JSON.stringify(updateTodolist));
  }

  render() {
    var todos = this.state.todolist.map((elem, i) => {
      return <li className="list-group-item" key={i}>
        {elem.name}
        <a className="pull-right" onClick={() => this.removeTodo(i)}>
          <i className="glyphicon glyphicon-trash"></i>
        </a>
      </li>;
    });

    return (
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group">
            <li href="#" className="list-group-item active">
              <i className="glyphicon glyphicon-align-left"></i> Todo
            </li>
            {todos}
            <li className="list-group-item hide" style={{padding: 0, border: 'none'}}>
              <Addtodo updateTodo={this.updateTodos} />
            </li>
          </ul>
        </div>

        <div className="col-md-6">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title"><i className="glyphicon glyphicon-align-left"></i> Panel title</h3>
            </div>
            <div className="panel-body">
              <Addtodo updateTodo={this.updateTodos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
