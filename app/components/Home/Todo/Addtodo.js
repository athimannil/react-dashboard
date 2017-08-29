import React from 'react';

export class Addtodo extends React.Component {
  constructor() {
    super();
    this.todoSubmit = this.todoSubmit.bind(this);
  }

  todoSubmit(event) {
    event.preventDefault();
    console.log(this);
    // let input = event.target.querySelector('input');
    // let value = input.value;
    // input.value = '';
    // value ? this.props.updateTodo(value) : '';
  }

  render(){
    return (
      <form onSubmit={this.todoSubmit}>
        <div className="form-group">
          <label>Task</label>
          <input
            type="text"
            className="form-control"
            ref="kooy"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea className="form-control" placeholder="Details"></textarea>
        </div>
        <div className="row">
          <div className="col-md-8">
            <label>Date</label>
            <input type="date" className="form-control" />
          </div>
          <div className="col-md-4">
            <label for="">&nbsp;</label>
            <input type="submit" className="btn btn-primary btn-block" value="New task" />
          </div>
        </div>
      </form>
    );
  }
}
