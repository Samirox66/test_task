import { TodoItem } from "../../../entities/Todo";
import { NewTodoInput, TodoFilters } from "../../../features";
import { useTodosContext } from "../../../shared/contexts";

import classes from "./TodoList.module.css";

const TodoList = () => {
    const { todos, changeIsTodoCompleted, clearCompleted, filter } =
        useTodosContext();

    const itemsLeft = todos.filter((todo) => !todo.completed).length;

    let filteredTodos = todos;
    if (filter == "Active") {
        filteredTodos = filteredTodos.filter((todo) => !todo.completed);
    } else if (filter == "Completed") {
        filteredTodos = filteredTodos.filter((todo) => todo.completed);
    }

    const mappedTodos = filteredTodos.map((todo) => (
        <TodoItem
            key={todo.id}
            todo={todo}
            onClick={() => changeIsTodoCompleted(todo.id)}
        />
    ));
    return (
        <section className={classes.todoList}>
            <NewTodoInput />
            <div className={classes.todos}>{mappedTodos}</div>
            <div className={classes.todoFilters}>
                <p>{itemsLeft} items left</p>
                <TodoFilters />
                <button
                    className={classes.clearButton}
                    onClick={clearCompleted}
                >
                    Clear completed
                </button>
            </div>
        </section>
    );
};

export { TodoList };
