import React, { FunctionComponent } from "react";
import styled from "styled-components";

type StartScreenProps = {
  onStart(): void;
};

const StartButton = styled.button`
  border: none;
  font-size: 2rem;
  cursor: pointer;
  font-weight: bold;
  color: #333;
  background: none;
`;

export const StartScreen: FunctionComponent<StartScreenProps> = ({
  onStart
}) => {
  return <StartButton onClick={onStart}>Start</StartButton>;
};
