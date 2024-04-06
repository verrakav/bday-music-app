import { screen, render } from "@testing-library/react";
import { user } from "@testing-library/user-event";
import NewUserPage from "../pages/NewUserPage";

test("it shows a date input and two buttons", () => {
  //render comp
  render(<NewUserPage />);
  //find the element
  const dateInput = screen.getAllByRole("textbox");
  const buttons = screen.getAllByRole("button");
  //assert
  expect(dateInput).toHaveLength(1);
  expect(buttons).toHaveLength(3);
});
