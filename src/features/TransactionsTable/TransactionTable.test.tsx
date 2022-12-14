import React from "react";
import { render, screen } from "@testing-library/react";
import { TransactionsTable } from "./TransactionsTable";

const MOCKED_TRANSACTIONS = [
  {
    id: 2,
    amount: 655.51,
    beneficiary: "Earnestine Castillo",
    account: "PL10104415359647878000000000",
    address: "715 Bennet Court, Brogan, Arizona, 9202",
    description: "Irure ut cillum mollit proident voluptate veniam.",
  },
];

test("renders table component", () => {
  render(<TransactionsTable transactionsData={MOCKED_TRANSACTIONS} />);
  const tableElement = screen.getByText(/Earnestine Castillo/i);
  expect(tableElement).toBeInTheDocument();
});
