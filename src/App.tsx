import * as React from 'react'
import { render } from 'react-dom'
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'
import { TodoInterface } from './interface'
import './style.css'

const App: React.FC = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([])
  function handleTodoCreate(todo: TodoInterface) {
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.push(todo)
    setTodos(newTodosState)
  }
  function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.find((todo: TodoInterface) => todo.id === id) !.name = event.target.value
    setTodos(newTodosState)
  }
  function handleTodoRemove(id: string) {
    const newTodosState: TodoInterface[] = todos.filter ((todo: TodoInterface) => todo.id !== id)
    setTodos(newTodosState)
  }
  function handleTodoComplete(id: string) {
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.find((todo: TodoInterface) => todo,id === id) !.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted
    setTodos(newTodosState)
  }
  return (
    <div className="App">
      <React.Fragment>
        <h2>ToDoApp</h2>
        <ToDoForm
        todos={todos}
        handleTodoCreate={handleTodoCreate}
        />
        <ToDoList
          todos={todos}
          handleTodoUpdate={handleTodoUpdate}
          handleTodoRemove={handleTodoRemove}
          handleTodoComplete={handleTodoComplete}         
        />
      </React.Fragment>
    </div>
  );
}
export default App;