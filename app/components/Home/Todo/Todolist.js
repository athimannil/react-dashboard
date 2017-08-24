import React from 'react';

export class Todolist extends React.Component {
  constructor(props) {
    super(props);
  }


  render(){
    var todos = this.props.todos.map((elem, i) => {
      return <li className="list-group-item" key={i}>{elem}</li>;
    });
    return (
      <div>
        {todos}
      </div>
    );
  }
}
