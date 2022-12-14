import { useMemo } from "react";
import { Table, TableColumns } from "../components/Table/Table";
import { Td, Tr } from "../components/Table/Table.styles";
import { useAppSelector } from "../store/hooks";
import { selectTransactions } from "../store/slices/transactionSlice";
import { formatDate } from "../utils/date-time";

export const TransactionsTable = () => {
  const { transactions } = useAppSelector(selectTransactions);

  const columns = useMemo<TableColumns>(
    () => [
      { accessor: "transaction_id", label: "id" },
      { accessor: "transaction_amount", label: "amount" },
      { accessor: "transaction_beneficiary", label: "beneficiary" },
      { accessor: "transaction_account", label: "account" },
      { accessor: "transaction_address", label: "address" },
      { accessor: "transaction_date", label: "date" },
      { accessor: "transaction_description", label: "description" },
    ],
    []
  );

  return (
    <Table columns={columns} customNoResultsText="nothing found - no results">
      {transactions.map((record, i) => {
        const { id, amount, beneficiary, account, address, date, description } =
          record;

        return (
          <Tr key={`${id}-${i.toString()}`}>
            <Td>{id}</Td>
            <Td>{amount}</Td>
            <Td>{beneficiary}</Td>
            <Td>{account}</Td>
            <Td>{address}</Td>
            <Td>{formatDate(date)}</Td>
            <Td>{description}</Td>
          </Tr>
        );
      })}
    </Table>
  );
};
