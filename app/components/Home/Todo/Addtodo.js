import React from 'react';

export class Addtodo extends React.Component {
  constructor() {
    super();
    this.todoSubmit = this.todoSubmit.bind(this);
  }

  todoSubmit(event) {
    event.preventDefault();
    let input = event.target.querySelector('input');
    let value = input.value;
    input.value = '';
    this.props.updateTodo(value);
  }

  render(){
    return (
      <form className="input-group" onSubmit={this.todoSubmit}>
        <input type="text" className="form-control" ref="login" />
        <span className="input-group-btn">
          <button className="btn btn-primary" type="submit">
            <i className="glyphicon glyphicon-plus"></i>
          </button>
        </span>
      </form>
    );
  }
}
