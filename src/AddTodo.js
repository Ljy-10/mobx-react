import React from 'react';
  import {observer, inject} from 'mobx-react';

  @inject('appState')
  @observer
  export default class AddTodo extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          input: '', // 定义新增事项的输入框的值
        }
      }
      // 监听输入框的值
      handleInput(e) {
        this.setState({
          input: e.target.value
        })
      }
      // 确认新增，调用store的动作，新增数据
      handleClick(e) {
        this.props.appState.AddTodo({
          id: parseInt(Math.random() * 10000000),
          isComplete: false,
          title: this.state.input
        });
        this.setState({
          input: ''
        }); // 清空输入框数据
      }
      render() {
        return (
          <div className='input-box'>
            <input value={this.state.input} onChange={(e)=>this.handleInput(e)}></input><button onClick={(e)=>this.handleClick(e)}>确认</button>
          </div>
        )
      }
  }