import { ReactNode } from "react";
import { StyledTable, TableContent, Th, Tr } from "./Table.styles";

export type TableColumns = Array<{
  accessor: string;
  label: string;
}>;

export type TableProps = {
  children: ReactNode;
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
          <tr>
            {columns.map(({ accessor, label }) => (
              <Th key={`${accessor}-${label}`}>{label.toUpperCase()}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children ? children : <Tr>{customNoResultsText || "NO RESULTS"}</Tr>}
        </tbody>
      </StyledTable>
    )}
  </TableContent>
);
