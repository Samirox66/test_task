import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "./TodoItem";

describe("TodoItem", () => {
    test("test if there is image inside button if todo is completed", () => {
        render(
            <TodoItem
                todo={{ completed: true, value: "Test todo", id: 1 }}
                onClick={() => {}}
            />
        );

        expect(screen.getByRole("img")).toBeInTheDocument();
    });
    test("test if click on button works", () => {
        let testVariable = 3;
        render(
            <TodoItem
                todo={{ completed: false, value: "Test todo", id: 1 }}
                onClick={() => (testVariable = 1)}
            />
        );
        fireEvent.click(screen.getByRole("button"));
        expect(testVariable).toBe(1);
    });
});
