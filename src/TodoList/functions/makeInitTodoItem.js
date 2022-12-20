import makeUuid from "./makeUuid"

const makeInitTodoItem = (options = {}) => ({
  id: makeUuid(),
  isChecked: false,
  content: '',
  ...options
})

export default makeInitTodoItem