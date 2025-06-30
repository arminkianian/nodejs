import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constants";
import { Todo } from "./useTodos";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Todo>("todos");

interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: apiClient.post,

    onMutate: (newTodo) => {
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
      // before our mutation are executed
      // we should update the Query Cache right away
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => [
        newTodo,
        ...(todos || []),
      ]);

      onAdd();

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
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },
    onError: (error, newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    },
  });
};

export default useAddTodo;
