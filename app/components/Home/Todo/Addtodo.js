import React from 'react';

export class Addtodo extends React.Component {
  constructor() {
    super();
    this.todoSubmit = this.todoSubmit.bind(this);
  }

  todoSubmit(e) {
  // todoSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: this.task.value,
      details: this.description.value,
      date: this.date.value,
      done: false
    };
    this.props.updateTodo(payload);
  }

  render(){
    return (
      <form onSubmit={this.todoSubmit}>
        <div className="form-group">
          <label>Task</label>
          <input
            type="text"
            name="task"
            className="form-control"
            required
            ref={input => this.task = input}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            name="description"
            placeholder="Details"
            required
            ref={textarea => this.description = textarea}
          ></textarea>
        </div>
        <div className="row">
          <div className="col-md-8">
            <label>Date</label>
            <input
              type="date"
              name="date"
              className="form-control"
              required
              ref={input => this.date = input}
            />
          </div>
          <div className="col-md-4">
            <label>&nbsp;</label>
            <input type="submit" className="btn btn-primary btn-block" value="New task" />
          </div>
        </div>
      </form>
    );
  }
}
