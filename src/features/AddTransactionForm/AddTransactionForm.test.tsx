import React from "react";
import { render, screen } from "@testing-library/react";
import { AddTransactionForm } from "./AddTransactionForm";
import { renderWithProviders } from "../../utils/utils-for-tests";

describe("AddTransactionForm", () => {
  renderWithProviders(<AddTransactionForm />);
  it("should render the basic fields", () => {
    expect(screen.getByLabelText("Amount:")).toBeInTheDocument();
    expect(screen.getByLabelText("Beneficiary:")).toBeInTheDocument();
    expect(screen.getByLabelText("Account number:")).toBeInTheDocument();
    expect(screen.getByLabelText("Address:")).toBeInTheDocument();
    expect(screen.getByLabelText("Description:")).toBeInTheDocument();
    expect(screen.getByText("Add Transaction")).toBeInTheDocument();
  });
});
