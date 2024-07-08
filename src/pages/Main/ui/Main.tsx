import { TodoList } from "../../../widgets";

import classes from "./Main.module.css";

const Main = () => {
    return (
        <>
            <header>
                <h1 className={classes.title}>Todos</h1>
            </header>
            <main className={classes.main}>
                <TodoList />
            </main>
        </>
    );
};

export { Main };
