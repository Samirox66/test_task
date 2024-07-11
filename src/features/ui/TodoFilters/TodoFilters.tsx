import classNames from "classnames";
import { Filter, useTodosContext } from "../../../shared/contexts";

import classes from "./TodoFilters.module.css";

export const TodoFilters = () => {
    const { filter, setFilter } = useTodosContext();

    const filterTypes: Filter[] = ["All", "Active", "Completed"];
    const filters = filterTypes.map((f, index) => (
        <label
            data-testId={`filter${f}`}
            key={index}
            onClick={() => setFilter(f)}
            className={classNames(classes.filter, {
                [classes.active]: f == filter,
            })}
        >
            {f}
            <input className={classes.hiddenInput} type="radio" />
        </label>
    ));

    return <div className={classes.todoFilters}>{filters}</div>;
};
