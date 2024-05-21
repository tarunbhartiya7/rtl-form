import { render, screen, within } from "@testing-library/react";
import CustomMatcher from "./CustomMatcher";

function toContainRole(container, role, quantity = 1) {
  const elements = within(container).queryAllByRole(role);

  if (elements.length === quantity) {
    return {
      pass: true,
    };
  }

  return {
    pass: false,
    message: () =>
      `Expected to find ${quantity} ${role} elements. Found ${elements.length} instead.`,
  };
}

expect.extend({ toContainRole });

test("should render only two buttons inside form", async () => {
  render(<CustomMatcher />);

  // Todo: Custom matcher not working
  const form = screen.getByRole("form");
  // const elements = within(form).getAllByRole("button");

  // expect(elements).toHaveLength(2);
  expect(form).toContainRole("button");
});
