import React, { memo } from "react";
import useTodoList from "./functions/useTodoList";
import TodoList from "./TodoList";

const TodoListContainer = () => {
  const {
    todoList,
    handleAddTodo,
    handleDeleteTodo,
    handleEditTodo,
    handleToggleChecked,
    handleToggleEditingTodoList,
  } = useTodoList();

  return (
    <div>
      <TodoList
        todoListData={todoList}
        onAddTodo={handleAddTodo}
        onToggleChecked={handleToggleChecked}
        onChangeTodoContent={handleEditTodo}
        onDeleteTodo={handleDeleteTodo}
        onToggleEditTodo={handleToggleEditingTodoList}
      />
    </div>
  );
};

export default memo(TodoListContainer);
