import { useAppDispatch, useAppSelector } from "./store/hooks";
import { debounce } from "lodash";

import {
  PageWrapper,
  TopBar,
  Footer,
  Content,
  Wrapper,
  SearchWrapper,
  SearchContainer,
} from "./App.styles";
import { useEffect, useRef, useState } from "react";
import {
  getTransactions,
  selectTransactions,
} from "./store/slices/transactionSlice";
import { TransactionsTable } from "./features/TransactionsTable/TransactionsTable";
import { AddTransactionForm } from "./features/AddTransactionForm/AddTransactionForm";

export const App = () => {
  const dispatch = useAppDispatch();
  const { transactions } = useAppSelector(selectTransactions);
  const [searchFilter, setSearchFilter] = useState("");
  const [visibleTransactions, setVisibleTransactions] = useState(transactions);

  const inputRef = useRef<HTMLInputElement>(null);

  const onKeyUp = debounce(
    () => setSearchFilter(inputRef.current?.value as string),
    300
  );

  useEffect(() => {
    dispatch(getTransactions());
  }, []);

  useEffect(() => {
    setVisibleTransactions(transactions);
  }, [transactions]);

  useEffect(() => {
    const filteredTransactions = transactions.filter((transaction) => {
      return transaction.beneficiary
        ?.toLowerCase()
        .includes(searchFilter.toLowerCase());
    });

    setVisibleTransactions(filteredTransactions);
  }, [searchFilter]);

  return (
    <PageWrapper>
      <TopBar>Topbar</TopBar>
      <Content>
        <Wrapper>
          <SearchWrapper>
            <SearchContainer>
              <label htmlFor="search">Beneficiary search:</label>
              <input onKeyUp={onKeyUp} ref={inputRef} id="search" />
            </SearchContainer>
          </SearchWrapper>
          <AddTransactionForm />
        </Wrapper>
        <TransactionsTable transactionsData={visibleTransactions} />
      </Content>
      <Footer>Footer</Footer>
    </PageWrapper>
  );
};

export default App;
