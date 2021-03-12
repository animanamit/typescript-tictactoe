import React from "react";
import styled from "styled-components";

const CellWrapper = styled.div`
  background-color: #ffffff;
  margin-bottom: -1px;
  border: none;
  cursor: pointer;
  outline: none;
`;

// what can be the content of a cell in tic tac toe? lets define that
export type CellValue = "x" | "o" | undefined;

type CellProps = {
  value: CellValue;
  toggle(index: number): void; // this is a callback and returns nothing
  index: number;
};

export const Cell: React.FunctionComponent<CellProps> = ({
  value,
  toggle,
  index
}) => {
  return (
    <CellWrapper onClick={() => toggle(index)}>
      {value === "o" ? "O" : value ? "X" : null}
    </CellWrapper>
  );
};
