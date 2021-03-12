import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Cell, CellValue } from "./Cell";

const BoardWrapper = styled.div`
  background-color: #999999;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  column-gap: 6px;
  row-gap: 6px;
`;

export type Winner = CellValue | "tie";

// have to specify types for props
// interface is a special kind of type that allows you to decide shape of object
// limitation of interface is that it can only define shape of an object
type BoardProps = {
  onGameEnd(winner: Winner): void;
};

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export const Board: React.FunctionComponent<BoardProps> = ({ onGameEnd }) => {
  const [cells, setCells] = useState<CellValue[]>(Array(9).fill(undefined));

  const currentShape: CellValue = cells.filter(n => n).length % 2 ? "o" : "x";
  // if cell value is undefined, it will be cast as false and filtered out

  const winningCondition = winningConditions.find(cond => {
    const line = cond.map(cellIndex => cells[cellIndex]);
    return line[0] && line.every(cellValue => cellValue === line[0]);
  });

  const tie = cells.filter(c => c).length === 9;

  const winningShape = winningCondition
    ? cells[winningCondition[0]]
    : undefined;

  const toggleCell = (index: number) => {
    setCells(cells => cells.map((c, i) => (i === index ? currentShape : c)));
  };

  useEffect(() => {
    if (winningShape) return onGameEnd(winningShape);
    if (tie) return onGameEnd("tie");
  }, [tie, winningShape, onGameEnd]);

  return (
    <BoardWrapper>
      {cells.map((cell, idx) => {
        return <Cell value={cell} index={idx} toggle={toggleCell} key={idx} />;
      })}
    </BoardWrapper>
  );
};
