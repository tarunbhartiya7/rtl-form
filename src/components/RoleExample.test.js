import { render, screen, within } from "@testing-library/react";
import RoleExample from "./RoleExample";

test("render correct table headers", () => {
  render(<RoleExample />);

  const roles = [
    "link",
    // "button",
    "contentinfo",
    "heading",
    "banner",
    "img",
    "checkbox",
    "spinbutton",
    "radio",
    // "textbox",
    "listitem",
    "list",
  ];

  for (let role of roles) {
    const el = screen.getByRole(role);
    expect(el).toBeInTheDocument();
  }
  // screen.logTestingPlaygroundURL();
});

// when there are multiple elements with same role then use acceessible name
test("can select by accessible name", () => {
  render(<RoleExample />);
  const submitButton = screen.getByRole("button", { name: /submit/i });
  expect(submitButton).toBeInTheDocument();
});

test("textbox", () => {
  render(<RoleExample />);
  const textbox = screen.getByRole("textbox", {
    name: /first name/i,
  });
  // screen.logTestingPlaygroundURL();
  expect(textbox).toBeInTheDocument();
});

test("aria button", () => {
  render(<RoleExample />);
  const iconButton = screen.getByRole("button", {
    name: /sign in/i,
  });
  expect(iconButton).toBeInTheDocument();
});
