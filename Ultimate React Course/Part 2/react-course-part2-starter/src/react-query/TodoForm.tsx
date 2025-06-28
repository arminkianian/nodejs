import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent, FormEventHandler, useRef } from "react";
import { Todo } from "./hooks/useTodos";
import axios from "axios";

interface AddTodoContext {
  previousTodos: Todo[];
}

const TodoForm = () => {
  const queryClient = useQueryClient();
  const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todosx", todo)
        .then((res) => res.data),
    onMutate: (newTodo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];
      // before our mutation are executed
      // we should update the Query Cache right away
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        newTodo,
        ...(todos || []),
      ]);

      return { previousTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      // we have 2 options to update the list:
      // 1. Approach: Invalidating the Cache
      // for this approach we have to get access to the QueryClient
      // queryClient.invalidateQueries({
      //   queryKey: ['todos']
      // })
      // 2. Approach: Updating the data in the cache directly
      queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
      if (ref.current) {
        ref.current.value = "";
      }
    },
    onError: (error, newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(["todos"], context.previousTodos);
    },
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
