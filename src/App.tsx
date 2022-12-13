import { useAppDispatch, useAppSelector } from "./store/hooks";

import { PageWrapper, TopBar, Footer, Content } from "./App.styles";
import { useEffect } from "react";
import {
  addTransaction,
  getTransactions,
  selectTransactions,
} from "./store/slices/transactionSlice";

export const App = () => {
  const dispatch = useAppDispatch();
  const transactions = useAppSelector(selectTransactions);

  useEffect(() => {
    dispatch(getTransactions());
  }, []);

  useEffect(() => {
    console.log(transactions.transactions);
  }, [transactions]);

  return (
    <PageWrapper>
      <TopBar>test</TopBar>
      <Content>
        <button onClick={() => dispatch(addTransaction())}>klik</button>
      </Content>
      <Footer>test</Footer>
    </PageWrapper>
  );
};

export default App;
