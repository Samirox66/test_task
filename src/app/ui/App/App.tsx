import { Main } from "../../../pages/Main";
import { TodosContextProvider } from "../../providers/TodosContextProvider";

function App() {
    return (
        <TodosContextProvider>
            <Main />
        </TodosContextProvider>
    );
}

export default App;
