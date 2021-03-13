import React, { FunctionComponent } from "react";
import { Winner } from "./Board";
import styled from "styled-components";

type ResetScreenProps = {
  winner: Winner;
  //   onReset: () => void; another way to define a function type
  onReset(): void;
};

const WinnerHeader = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  font-size: 4rem;
  margin-top: 0;
  display: block;
`;

const EndButton = styled.button`
  border: none;
  font-size: 2rem;
  cursor: pointer;
  font-weight: bold;
  color: #333;
  background: none;
`;

export const ResetScreen: FunctionComponent<ResetScreenProps> = ({
  winner,
  onReset
}) => {
  return (
    <>
      <WinnerHeader>
        {winner === "tie" ? "It's a tie" : `${winner} is the winner!`}
      </WinnerHeader>
      <EndButton onClick={onReset}>Restart</EndButton>
    </>
  );
};
