import classNames from "classnames";
import { Todo } from "../../types/Todo";

import classes from "./TodoItem.module.css";

interface TodoItemProps {
    todo: Todo;
    onClick: () => void;
}

export const TodoItem = ({ todo, onClick }: TodoItemProps) => {
    return (
        <div className={classes.todoItem}>
            <button className={classes.completedButton} onClick={onClick}>
                {todo.completed && "yes"}
            </button>
            <p
                className={classNames({
                    [classes.completedText]: todo.completed,
                })}
            >
                {todo.value}
            </p>
        </div>
    );
};
