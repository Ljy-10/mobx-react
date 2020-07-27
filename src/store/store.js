import {observable, action, computed, toJS} from 'mobx';

  class todoList {
    @observable todos = [
        {
          id: parseInt(Math.random() * 10000000),
          isComplete: false,
          title: 'ddd'
        },
        {
          id: parseInt(Math.random() * 10000000),
          isComplete: true,
          title: 'ddd'
        }
      ];

    // 计算属性，重可观察属性 todos 衍生出来，返回没有完成的待办项的个数
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.isComplete).length;
    }

    // 计算属性，重可观察属性 todos 衍生出来，返回已完成的待办项的个数
    @computed get finishedTodoCount() {
        return this.todos.filter(todo => todo.isComplete).length;
    }
    @action
    toggleComplete = (val) => {
      const todos = toJS(this.todos).map(item => {
        if(item.id == val) {
          item.isComplete=true;
        }
        return item;
      });
      this.todos = todos;
    }

    @action
    toggleTodo = (val) => {
      const todos = toJS(this.todos).map(item => {
        if(item.id == val) {
          item.isComplete=false;
        }
        return item;
      });
      this.todos = todos;
    }

    @action
    AddTodo = (val) => {
      const todo = this.todos;
      this.todos = [val, ...todo];
    }

    @action
    deletes = (val) => {
      const todos = toJS(this.todos).filter(item => item.id != val);
      this.todos = todos;
    }

  }


  const store = new todoList();
  export default store;