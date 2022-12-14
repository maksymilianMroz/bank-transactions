import { ReactNode } from "react";
import { StyledTable, TableContent, Th, Tr } from "./Table.styles";

export type TableColumns = Array<{
  accessor: string;
  label: string;
}>;

export type TableProps = {
  children: Array<ReactNode>;
  columns: TableColumns;
  customNoResultsText?: string;
  isLoading?: boolean;
  onSearch?: () => void;
};

export const Table = ({
  children,
  columns,
  customNoResultsText,
  isLoading,
  onSearch,
}: TableProps) => (
  <TableContent>
    {isLoading ? (
      <div>Data is loading...</div>
    ) : (
      <StyledTable $isLoading={isLoading} cellSpacing="0">
        <thead>
          {columns.map(({ accessor, label }) => (
            <Th key={`${accessor}-${label}`}>{label}</Th>
          ))}
        </thead>
        <tbody>
          {children.length ? (
            children
          ) : (
            <Tr>{customNoResultsText || "NO RESULTS"}</Tr>
          )}
        </tbody>
      </StyledTable>
    )}
  </TableContent>
);
