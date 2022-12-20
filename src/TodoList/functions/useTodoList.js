import { useCallback, useState } from "react";
import makeInitTodoItem from "./makeInitTodoItem";
import useToggle from "./useToggle";

const useTodoList = () => {
  const [todoList, setTodoList] = useState([
    makeInitTodoItem({ content: 'This is a todo :)'})
  ])
  const {
    toggle: isEditingTodoList,
    handleToggle: handleToggleEditingTodoList
  } = useToggle()

  const handleAddTodo = useCallback((content = 'Default Content') => {
    setTodoList(todoList => ([
      ...todoList, makeInitTodoItem({
        content,
      })
    ]))
  }, [])

  const handleToggleChecked = useCallback((id = '') => (checked = false) => {
    setTodoList(todoList => {
      const newTodoList = [...todoList]
      const matchedIdx = todoList.findIndex(todo => todo.id === id)
      if(matchedIdx === -1) return newTodoList
      newTodoList[matchedIdx].isChecked = checked
      return newTodoList
    })
  }, [])

  const handleEditTodo = useCallback((id = '') => (content = '') => {
    setTodoList(todoList => {
      const newTodoList = [...todoList]
      const matchedIdx = todoList.findIndex(todo => todo.id === id)
      if(matchedIdx === -1) return newTodoList
      newTodoList[matchedIdx].content = content
      return newTodoList
    })
  }, [])

  const handleDeleteTodo = useCallback((id = '') => {
    setTodoList(todoList => (
      todoList.filter(todo => todo.id !== id)
    ))
  }, [])

  return ({
    todoList,
    handleAddTodo,
    handleEditTodo,
    handleDeleteTodo,
    handleToggleChecked,
    handleToggleEditingTodoList,
  })
};

export default useTodoList;
