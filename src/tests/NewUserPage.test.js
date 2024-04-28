import { screen, render } from "@testing-library/react";
import { user } from "@testing-library/user-event";
import NewUserPage from "../pages/NewUserPage";

test("it shows a date input and two buttons", () => {
  // screen.logTestingPlaygroundURL();
  //render comp
  render(<NewUserPage />);
  //find the element
  const dateInput = screen.getAllByRole("textbox");
  const buttons = screen.getAllByRole("button", { name: /date submit/i });
  //assert
  expect(dateInput).toHaveLength(1);
  expect(buttons).toHaveLength(1);
});

test("it adds the chosen date (on the left)", async () => {
  //define mockup fnc
  const mockHandleDateSubmit = jest.fn();
  //render comp
  render(<NewUserPage onDateSubmit={mockHandleDateSubmit} />);
  //find the elements, find the button
  const button = screen.getAllByRole("button", { name: /date submit/i });
  //find the rendered list
  const renderedBdays = screen.getByRole("list");
  const dateInput = screen.getAllByRole("textbox");

  //imitate user event
  await user.click(button);
  //assert
});
