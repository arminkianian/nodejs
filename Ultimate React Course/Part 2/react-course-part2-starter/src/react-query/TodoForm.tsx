import { FormEvent, useRef } from "react";
import useAddTodo from "./hooks/useAddTodo";

const TodoForm = () => {
  const addTodo = useAddTodo(() => {
    if (ref.current) ref.current.value = "";
  });

  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (ref.current && ref.current.value) {
      addTodo.mutate({
        id: 0,
        title: ref.current?.value,
        completed: false,
        userId: 1,
      });
    }
  };

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}

      <form className="row mb-3" onSubmit={handleSubmit}>
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary" disabled={addTodo.isLoading}>
            {addTodo.isLoading ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
