import { useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import { Table, TableColumns } from "../../components/Table/Table";
import { Td, Tr } from "../../components/Table/Table.styles";
import { Transaction, Transactions } from "../../store/interfaces";
import { formatDate } from "../../utils/date-time";

import "./TransactionsTable.css";
import { Wrapper } from "./TransactionTable.styles";

type CurrentItems = {
  currentItems: Transaction[];
};

const Items = ({ currentItems }: CurrentItems) => {
  return (
    <>
      {currentItems &&
        currentItems.map((record, i) => {
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
    </>
  );
};

export const TransactionsTable = ({ transactionsData }: Transactions) => {
  const [itemOffset, setItemOffset] = useState(0);
  const ITEMS_PER_PAGE = 20;
  const endOffset = itemOffset + ITEMS_PER_PAGE;
  const currentItems = transactionsData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(transactionsData.length / ITEMS_PER_PAGE);

  const handlePageClick = (event: any) => {
    const newOffset =
      (event.selected * ITEMS_PER_PAGE) % transactionsData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

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
    <Wrapper>
      <Table columns={columns} customNoResultsText="nothing found - no results">
        <Items currentItems={currentItems} />
      </Table>
      <ReactPaginate
        breakLabel="..."
        containerClassName="pagination"
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
      />
    </Wrapper>
  );
};
