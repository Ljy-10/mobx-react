import React from 'react';
import {observer, inject} from 'mobx-react';

@inject('appState')
@observer
export default class Done extends React.Component {
  constructor(props) {
    super(props);
  }
  todoChange = (event) => {
    this.props.appState.toggleTodo(event.target.value);
  }
  //取得已经完成的todo数量
  // getUnfinishedCount() {
  //   //this.props.todos就是从connect传入的state数据
  //   return this.props.appState.todos.filter((i) => {
  //     return i.isComplete === true;
  //     }).length;
  // }
  // 删除已完成事项
  delete = (event) => {
    this.props.appState.deletes(event.target.getAttribute("data-id"))
  }
  getTodos() {
    return this.props.appState.todos.map((todo, index) => {
      if(todo.isComplete == true) {
        return (<li key={index} className='ulli'>
          <input type="checkbox" value={todo.id} checked={todo.isComplete} onChange={this.todoChange}/> 
            <del>{todo.title}</del>
          <button type="button" data-id={todo.id} onClick={this.delete}>删除</button>
        </li>)
      }
    });
  }
  render() {
    return (<div className='ising'>
        <h5>已经完成<span className='ingspan'>{this.props.appState.finishedTodoCount}</span></h5>
      <ul className='ullist'>
        {this.getTodos()}
      </ul>
    </div>);
  }
}