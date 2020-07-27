import React from 'react';
  import ReactDOM from 'react-dom';
  import './App.css';
  import Todo from './Todo.js';
  import AddTodo from './AddTodo.js';
  import Done from './Done.js';
  import store from './store/store.js';
  import {Provider} from 'mobx-react';

ReactDOM.render(
  <div className='box'>
    <Provider appState={store}>
      <AddTodo></AddTodo>
      <Todo></Todo>
      <Done></Done>
    </Provider>
  </div>,
  document.getElementById('root')
);
