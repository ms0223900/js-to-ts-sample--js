import { Title } from "@mui/icons-material"
import Head from "next/head"
import TodoListContainer from "../../src/TodoList/TodoListContainer"

export default function TodoPage() {
  return (
    <>
      <Head>
        <title>
          {'Todo List Sample'}
        </title>
      </Head>
      <main>
        <TodoListContainer />
      </main>
    </>
  )
}