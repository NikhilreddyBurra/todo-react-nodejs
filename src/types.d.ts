interface Todo {
    text: string;
    complete: boolean;
  }
  type AddTodo = (text: string) => void;
  type ToggleTodo = (selectedTodo: Todo) => void;