import { useAppDispatch, useAppSelector } from "./store/hooks";

import { PageWrapper, TopBar, Footer, Content } from "./App.styles";
import { useEffect, useMemo } from "react";
import {
  addTransaction,
  getTransactions,
  selectTransactions,
} from "./store/slices/transactionSlice";
import { Table, TableColumns } from "./components/Table/Table";
import { Row, Td, Tr } from "./components/Table/Table.styles";
import { formatDate } from "./utils/date-time";

export const App = () => {
  const dispatch = useAppDispatch();
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

  useEffect(() => {
    dispatch(getTransactions());
  }, []);

  useEffect(() => {
    console.log(transactions);
  }, [transactions]);

  return (
    <PageWrapper>
      <TopBar>test</TopBar>
      <Content>
        <Table
          columns={columns}
          customNoResultsText="nothing found - no results"
        >
          {transactions.map((record, i) => {
            const {
              id,
              amount,
              beneficiary,
              account,
              address,
              date,
              description,
            } = record;

            return (
              <Tr key={`${id}-${i.toString()}`}>
                <Td>
                  <Row>{id}</Row>
                </Td>
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
      </Content>
      <Footer>test</Footer>
    </PageWrapper>
  );
};

export default App;
