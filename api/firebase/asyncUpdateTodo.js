import { doc, updateDoc } from 'firebase/firestore';
import db, { TODO_LIST_APP_COLLECTION_NAME } from './firebase';
import getDocRef from './utils/getDocRef';

const asyncUpdateTodo = async (todoId = '', payload = {}) => {
  const todoItemRef = getDocRef([todoId]);
  return await updateDoc(todoItemRef, payload);
};

export default asyncUpdateTodo;
