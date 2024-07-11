import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
    test("test if todo is added after pressing enter on input", async () => {
        const user = userEvent.setup();
        render(<App />);
        const input: HTMLInputElement = screen.getByRole("textbox");
        await user.type(input, "todo test{enter}");

        expect(screen.getByTestId("todos").children.length).toBe(1);
    });
    test("test if completed todo is cleared", async () => {
        const user = userEvent.setup();
        render(<App />);
        const input: HTMLInputElement = screen.getByRole("textbox");
        await user.type(input, "todo test{enter}");

        const completeButton = screen.getByTestId("complete-button-1");

        await user.click(completeButton);

        const clearButton = screen.getByTestId("clear-button");
        await user.click(clearButton);

        expect(screen.getByTestId("todos").children.length).toBe(0);
    });
    test("test if completed todo is shown after completed filter clicked", async () => {
        const user = userEvent.setup();
        render(<App />);
        const input: HTMLInputElement = screen.getByRole("textbox");
        await user.type(input, "todo test{enter}");

        const completeButton = screen.getByTestId("complete-button-1");

        await user.click(completeButton);

        const completedFilter = screen.getByTestId("filterCompleted");
        await user.click(completedFilter);

        expect(screen.getByTestId("todos").children.length).toBe(1);
    });
    test("test if not completed todo is shown after active filter clicked", async () => {
        const user = userEvent.setup();
        render(<App />);
        const input: HTMLInputElement = screen.getByRole("textbox");
        await user.type(input, "todo test{enter}");

        const activeFilter = screen.getByTestId("filterActive");
        await user.click(activeFilter);

        expect(screen.getByTestId("todos").children.length).toBe(1);
    });
});
