import { useState } from "react";
import { useTodosContext } from "../../../shared/contexts";

import classes from "./NewTodoInput.module.css";

export const NewTodoInput = () => {
    const [newTodo, setNewTodo] = useState("");
    const { addTodo } = useTodosContext();

    const handleOnKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
        if (evt.code != "Enter") {
            return;
        }

        addTodo(evt.currentTarget.value);
        setNewTodo("");
    };

    const handleOnInput = (evt: React.FormEvent<HTMLInputElement>) => {
        setNewTodo(evt.currentTarget.value);
    };

    return (
        <input
            className={classes.input}
            value={newTodo}
            onInput={handleOnInput}
            onKeyDown={handleOnKeyDown}
            placeholder="What needs to be done?"
        />
    );
};
