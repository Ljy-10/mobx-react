import React, { Component } from 'react';
  import {observer, inject} from 'mobx-react';

  @inject('appState')
  @observer
  export default class Todo extends Component {
    constructor(props) {
        super(props);
    }
    // 改变事项的状态为已完成
    todoChange = (event) => {
        //当onChange事件发生时，调用toggleComplete动作
        this.props.appState.toggleComplete(event.target.value);
    }
    //取得未完成的todo数量
    // getUnfinishedCount() {
    //   return this.props.appState.todos.filter((i) => {
    //     return i.isComplete === false;
    //   }).length;
    // }
    // 删除数据
    deletee = (event) => {
      this.props.appState.deletes(event.target.getAttribute("data-id"));
    }
    getTodos() {
      return this.props.appState.todos.map((todo, index) => {
        if(todo.isComplete == false) {
          return (<li key={index} className='ulli'>
            <input type="checkbox" value={todo.id} checked={todo.isComplete} onChange={this.todoChange}/> 
                <span>{todo.title}</span>
            <button type="button" data-id={todo.id} onClick={this.deletee}>删除</button>
          </li>)
        }
      });
    }
    render() {
      console.log( this.props.appState.todos)
      return (<div className='ising'>
          <h5>正在进行<span className='ingspan'>{this.props.appState.unfinishedTodoCount}</span></h5>
        <ul className='ullist'>
          {this.getTodos()}
        </ul>
      </div>);
    }
  }