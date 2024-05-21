import { render, screen, within } from "@testing-library/react";
import AsyncColorList from "./AsyncColorList";

test("favor findBy or findAllBy when data fetching", async () => {
  render(<AsyncColorList />);

  const listitems = await screen.findAllByRole("listitem");

  expect(listitems).toHaveLength(3);
});
