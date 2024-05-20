import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

// function renderComponent() {
//   const users = [
//     { name: "jane", email: "jane@jane.com" },
//     { name: "sam", email: "sam@sam.com" },
//   ];
//   render(<UserList users={users} />);

//   return {
//     users
//   }
// }

const users = [
  { name: "jane", email: "jane@jane.com" },
  { name: "sam", email: "sam@sam.com" },
];

test("render correct table headers", () => {
  render(<UserList users={users} />);
  const nameHeader = screen.getByRole("columnheader", {
    name: /name/i,
  });
  const emailHeader = screen.getByRole("columnheader", {
    name: /email/i,
  });
  expect(nameHeader).toBeInTheDocument();
  expect(emailHeader).toBeInTheDocument();
});

test("render one row per user", () => {
  const { container } = render(<UserList users={users} />);
  const rows = container.querySelectorAll("tbody tr");
  // const rows = within(screen.getByTestId("users")).getAllByRole("row");
  expect(rows).toHaveLength(2);
  // screen.logTestingPlaygroundURL();
});

test("render the name and email of each user", () => {
  render(<UserList users={users} />);

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
