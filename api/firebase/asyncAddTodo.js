import { addDoc, serverTimestamp } from 'firebase/firestore';
import { todoListCollectionDocRef } from './firebase';

const asyncAddTodo = async ({ id, content, checked }) => {
  const docRef = await addDoc(todoListCollectionDocRef, {
    id,
    content,
    checked,
    created: serverTimestamp(),
  });
  return docRef;
};

export default asyncAddTodo;
