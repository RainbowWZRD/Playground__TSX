import React, { useRef } from "react";

type AddTodoProps = {
  onAddTodo: (text: string) => any;
  children?: JSX.Element;
}

const AddTodo = ({ children, onAddTodo }: AddTodoProps) => {
  const todoRef = useRef<HTMLInputElement>(null)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredTodo = todoRef.current!.value;

    onAddTodo(enteredTodo)
  }
  return <form onSubmit={submitHandler}
    style={{ display: "flex", flexDirection: "column" }}>
    <label htmlFor="todo">Write here</label>
    <input ref={todoRef} id='todo' />
    <button type="submit" >Add todo</button>
  </form>
}

export default AddTodo;