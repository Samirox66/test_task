import { TodoItem } from "../../../entities/Todo";
import { NewTodoInput, TodoFilters } from "../../../features";
import { useTodosContext } from "../../../shared/contexts";

import classes from "./TodoList.module.css";

const TodoList = () => {
    const { todos, changeIsTodoCompleted, clearCompleted } = useTodosContext();

    const itemsLeft = todos.filter((todo) => !todo.completed).length;

    const mappedTodos = todos.map((todo) => (
        <TodoItem
            key={todo.id}
            todo={todo}
            onClick={() => changeIsTodoCompleted(todo.id)}
        />
    ));
    return (
        <section>
            <NewTodoInput />
            {mappedTodos}
            <div className={classes.todoFilters}>
                <p>{itemsLeft} items left</p>
                <TodoFilters />
                <button onClick={clearCompleted}>Clear completed</button>
            </div>
        </section>
    );
};

export { TodoList };
