import React, { FunctionComponent } from "react";
import { Winner } from "./Board";

type ResetScreenProps = {
  winner: Winner;
  //   onReset: () => void; another way to define a function type
  onReset(): void;
};

export const ResetScreen: FunctionComponent<ResetScreenProps> = ({
  winner,
  onReset
}) => {
  return (
    <>
      {winner === "tie" ? (
        <h2>Game is a tie!</h2>
      ) : (
        <h2>{winner} is a winner!</h2>
      )}
      <button onClick={onReset}>Restart</button>
    </>
  );
};
