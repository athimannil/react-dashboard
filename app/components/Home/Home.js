import React from 'react';

import { Todo } from './Todo/Todo';

// var todolist = ['first task', 'second task', 'Final tassk'];
// var todolist = [];
var todolist = [
  {name: 'I have to do this', date: '2015-05-18T18:30:00.000Z', done: true, detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere asperiores at magni! Officia vero sunt, rerum tempore, deserunt illo expedita iure blanditiis deleniti doloremque molestias fuga quod nemo perferendis ipsam. ipsum dolor sit amet kili paari poyi'},
  {name: 'I have to do that', date: '2014-06-24T18:30:00.000Z', done: false, detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum corporis commodi voluptate suscipit ratione, ipsa sapiente vitae dolores, veritatis magnam modi reiciendis ullam, officiis inventore facere mollitia ipsam error quam? ipsum dolor sit amet kili paari poyi'},
  {name: 'He has to do those', date: '2015-07-12T18:30:00.000Z', done: true, detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolorum fugit, dolore inventore minus, labore, voluptas blanditiis corrupti perspiciatis illum velit excepturi voluptates delectus odio assumenda earum maxime molestias minima. ipsum dolor sit amet kili paari poyi'},
];
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
          <div className="col-md-8">
            <Todo todos={todolist} />
          </div>
        </div>
      </div>
    );
  }
}
