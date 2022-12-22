import { useCallback, useEffect, useRef, useState } from 'react';
import asyncAddTodo from '../../../api/firebase/asyncAddTodo';
import asyncDeleteTodo from '../../../api/firebase/asyncDeleteTodo';
import asyncUpdateTodo from '../../../api/firebase/asyncUpdateTodo';
import BasicStateStore from '../state/BasicStateStore';
import TodoListState from '../state/TodoListState';

const useTodoList = ({ initTodoListData = [] }) => {
  const todoListState = useRef(
    new TodoListState(
      new BasicStateStore({
        todoList: initTodoListData,
      })
    )
  );
  const [todoList, setTodoList] = useState(todoListState.current.getTodoList());

  const handleAddTodo = useCallback(async (content = 'Default Content') => {
    // console.log('add todo');
    try {
      await todoListState.current.addNewTodo(content, asyncAddTodo);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleToggleChecked = useCallback(
    (id = '') =>
      async (checked = false) => {
        await todoListState.current.updateTodo(
          {
            id,
            updatedTodoData: { checked },
          },
          asyncUpdateTodo
        );
      },
    []
  );

  const handleEditTodo = useCallback(
    (id = '') =>
      async (content = '') => {
        await todoListState.current.updateTodo(
          {
            id,
            updatedTodoData: { content },
          }
          // asyncUpdateTodo
        );
      },
    []
  );

  const handleDeleteTodo = useCallback(async (id = '') => {
    await todoListState.current.deleteTodo(id, asyncDeleteTodo);
  }, []);

  useEffect(() => {
    todoListState.current.stateStore.addListener('updateState', (s) => {
      setTodoList(s.todoList);
      // console.log(s.todoList);
    });
  }, []);

  return {
    todoList,
    handleAddTodo,
    handleEditTodo,
    handleDeleteTodo,
    handleToggleChecked,
  };
};

export default useTodoList;
