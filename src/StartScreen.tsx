import React, { FunctionComponent } from "react";

type StartScreenProps = {
  onStart(): void;
};

export const StartScreen: FunctionComponent<StartScreenProps> = ({
  onStart
}) => {
  return <button onClick={onStart}>Start</button>;
};
