import { createContext } from "react";
import { Todo } from "../../../entities/Todo";

export type Filter = "Active" | "All" | "Completed";

export interface ITodosContext {
    todos: Todo[];
    maxTodoId: number;
    addTodo: (todo: string) => void;
    filter: Filter;
    setFilter: (filter: Filter) => void;
    changeIsTodoCompleted: (id: number) => void;
    clearCompleted: () => void;
}

export const TodosContext = createContext<ITodosContext>({
    todos: [],
    maxTodoId: 0,
    addTodo() {},
    filter: "All",
    setFilter() {},
    changeIsTodoCompleted() {},
    clearCompleted() {},
});
