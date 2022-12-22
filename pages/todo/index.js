import { Title } from '@mui/icons-material';
import Head from 'next/head';
import asyncGetTodoList from '../../api/firebase/asyncGetTodoList';
import TodoListContainer from '../../src/TodoList/TodoListContainer';

export const getServerSideProps = async () => {
  const res = await asyncGetTodoList();
  return {
    props: {
      initTodoListData: res,
    },
  };
};

export default function TodoPage({ initTodoListData }) {
  return (
    <>
      <Head>
        <title>{'Todo List Sample'}</title>
      </Head>
      <main>
        <TodoListContainer initTodoListData={initTodoListData} />
      </main>
    </>
  );
}
