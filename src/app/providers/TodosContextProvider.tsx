import { PropsWithChildren, useState } from "react";
import { Todo } from "../../entities/Todo";
import { Filter, TodosContext } from "../../shared/contexts";

export const TodosContextProvider = ({ children }: PropsWithChildren) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<Filter>("All");
    const [maxTodoId, setMaxTodoId] = useState(0);

    let filteredTodos = todos;

    if (filter == "Active") {
        filteredTodos = filteredTodos.filter((todo) => !todo.completed);
    } else if (filter == "Completed") {
        filteredTodos = filteredTodos.filter((todo) => todo.completed);
    }

    return (
        <TodosContext.Provider
            value={{
                maxTodoId: maxTodoId,
                todos: filteredTodos,
                addTodo: (todo) => {
                    setTodos((prev) => [
                        ...prev,
                        { value: todo, completed: false, id: maxTodoId + 1 },
                    ]);
                    setMaxTodoId((prev) => prev + 1);
                },
                filter: filter,
                setFilter: (filter) => setFilter(filter),
                changeIsTodoCompleted(id) {
                    const newTodos = todos.map((todo) => {
                        if (todo.id == id) {
                            return { ...todo, completed: !todo.completed };
                        } else {
                            return todo;
                        }
                    });

                    setTodos(newTodos);
                },
                clearCompleted() {
                    setTodos((prev) => prev.filter((todo) => !todo.completed));
                },
            }}
        >
            {children}
        </TodosContext.Provider>
    );
};
