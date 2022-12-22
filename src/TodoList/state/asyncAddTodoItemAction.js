import makeInitTodoItem from '../functions/makeInitTodoItem';

const asyncAddTodoItemAction =
  (todoList = [], content = 'Default Content') =>
  async (asyncAddTodoFn) => {
    const newTodoItem = makeInitTodoItem({
      content,
    });
    if (typeof asyncAddTodoFn !== 'function') return [...todoList, newTodoItem];
    const addedRes = await asyncAddTodoFn({
      ...newTodoItem,
      checked: newTodoItem.checked,
    });
    return [
      ...todoList,
      {
        ...newTodoItem,
        id: addedRes.id,
      },
    ];
  };

export default asyncAddTodoItemAction;
