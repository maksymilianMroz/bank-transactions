import styled, { css } from "styled-components";

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const TableContent = styled.div`
  position: relative;
  overflow: overlay;
  font-size: 12px;
`;

export type StyledTableProps = {
  $isLoading?: boolean;
};

export const StyledTable = styled.table<StyledTableProps>`
  width: 100%;
  overflow: hidden;
  ${({ $isLoading }) =>
    $isLoading &&
    css`
      filter: blur(2px);
    `}

  th,
  td {
    padding: 8px;

    &:first-child {
      padding-left: 16px;
    }

    &:last-child {
      padding-right: 16px;
    }
  }
`;

export const Th = styled.th`
  position: relative;
  height: 70px;
  text-align: left;
`;

export const Tr = styled.tr`
  &:nth-child(odd) {
    background: #7896a0;
  }
`;

export const Td = styled.td`
  position: relative;
  height: 70px;
`;
