const asyncUpdateTodoAction =
  (todoList = [], payload) =>
  async (asyncUpdateFn) => {
    if (typeof asyncUpdateFn === 'function') {
      await asyncUpdateFn(payload.id, payload.updatedTodoData);
    }
    const newTodoList = [...todoList];
    const matchedIdx = newTodoList.findIndex((t) => t.id === payload.id);
    if (matchedIdx === -1) return newTodoList;

    newTodoList[matchedIdx] = {
      ...newTodoList[matchedIdx],
      ...payload.updatedTodoData,
    };
    return newTodoList;
  };

export default asyncUpdateTodoAction;
