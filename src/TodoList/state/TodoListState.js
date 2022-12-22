import asyncAddTodoItemAction from './asyncAddTodoItemAction';
import asyncDeleteTodoAction from './asyncDeleteTodoAction';
import asyncUpdateTodoAction from './asyncUpdateTodoAction';
import BasicStateStore from './BasicStateStore';

const initState = {
  todoList: [],
};

class TodoListState {
  stateStore = new BasicStateStore(initState);

  constructor(stateStore = new BasicStateStore(initState)) {
    this.stateStore = stateStore;
  }

  getTodoList() {
    return this.stateStore.getState().todoList;
  }

  async addNewTodo(content = 'Default Content', asyncAddTodoFn) {
    const res = await asyncAddTodoItemAction(
      this.getTodoList(),
      content
    )(asyncAddTodoFn);
    this.stateStore.setState({
      todoList: res,
    });
  }

  async updateTodo(payload, asyncUpdateFn) {
    const res = await asyncUpdateTodoAction(
      this.getTodoList(),
      payload
    )(asyncUpdateFn);
    this.stateStore.setState({
      todoList: res,
    });
  }

  async deleteTodo(id, asyncDeleteFn) {
    const res = await asyncDeleteTodoAction(
      this.getTodoList(),
      id
    )(asyncDeleteFn);
    this.stateStore.setState({
      todoList: res,
    });
  }
}

export default TodoListState;
