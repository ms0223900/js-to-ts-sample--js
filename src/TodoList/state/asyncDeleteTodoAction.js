import asyncDeleteTodo from '../../../api/firebase/asyncDeleteTodo';

const asyncDeleteTodoAction =
  (todoList = [], id) =>
  async (asyncDeleteFn) => {
    if (typeof asyncDeleteFn === 'function') {
      await asyncDeleteTodo(id);
    }

    return todoList.filter((todo) => todo.id !== id);
  };

export default asyncDeleteTodoAction;
