import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './App';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
var todoItems = [];
todoItems.push({ index: 0, value: "learn react", done: false });
todoItems.push({ index: 1, value: "Go shopping", done: true });
todoItems.push({ index: 2, value: "buy flowers", done: true });

ReactDOM.render(<ToDoApp items={todoItems}/>, document.getElementById('root'));