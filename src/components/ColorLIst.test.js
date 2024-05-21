import { render, screen, within } from "@testing-library/react";
import ColorList from "./ColorList";

test("finding 0 element with getBY, queryBy and findBy", async () => {
  render(<ColorList />);

  expect(() => screen.getByRole("textbox")).toThrow(); // getBy throws error if not able to find element
  expect(screen.queryByRole("textbox")).toEqual(null); // queryBy gives null when unable to find element

  let isError = false;
  try {
    await screen.findByRole("textbox"); // findBy throws error after 1 sec if unable to find element
  } catch (error) {
    isError = true;
  }

  expect(isError).toEqual(true);
});

test("finding 1 element with getBY, queryBy and findBy", async () => {
  render(<ColorList />);

  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(screen.queryByRole("list")).toBeInTheDocument();
  expect(await screen.findByRole("list")).toBeInTheDocument();
});

test("finding more than 1 element with getBY, queryBy and findBy", async () => {
  render(<ColorList />);

  // All of them throws error

  expect(() => screen.getByRole("listitem")).toThrow();
  expect(() => screen.queryByRole("listitem")).toThrow();

  let isError = false;
  try {
    await screen.findByRole("listitem");
  } catch (error) {
    isError = true;
  }

  expect(isError).toEqual(true);
});

test("finding more than 1 element with getAllBY, queryAllBy and findAllBy", async () => {
  render(<ColorList />);

  expect(screen.getAllByRole("listitem")).toHaveLength(3);
  expect(screen.queryAllByRole("listitem")).toHaveLength(3);
  expect(await screen.findAllByRole("listitem")).toHaveLength(3);
});
