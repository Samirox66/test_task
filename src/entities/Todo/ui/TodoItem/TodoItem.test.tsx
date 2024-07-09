import { render, screen } from "@testing-library/react";
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
});
