import { useState } from "react";
import { useTodosContext } from "../../../shared/contexts";

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
            value={newTodo}
            onInput={handleOnInput}
            onKeyDown={handleOnKeyDown}
        />
    );
};
