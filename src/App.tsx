import { useAppDispatch, useAppSelector } from "./store/hooks";

import { PageWrapper, TopBar, Footer, Content } from "./App.styles";
import { useEffect, useMemo } from "react";
import {
  addTransaction,
  getTransactions,
  selectTransactions,
} from "./store/slices/transactionSlice";
import { TransactionsTable } from "./features/TransactionsTable";

export const App = () => {
  const dispatch = useAppDispatch();
  const { transactions } = useAppSelector(selectTransactions);

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
        <TransactionsTable />
      </Content>
      <Footer>Footer</Footer>
    </PageWrapper>
  );
};

export default App;
