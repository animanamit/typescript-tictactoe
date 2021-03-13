import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import circle from "./circle.svg";
import cross from "./cross.svg";

const CellWrapper = styled.div`
  background-color: #ffffff;
  margin-bottom: -1px;
  border: none;
  cursor: pointer;
  outline: none;
  position: relative;
  /* display: flex;
  justify-content: center;
  align-content: center; */
`;

// what can be the content of a cell in tic tac toe? lets define that
export type CellValue = "x" | "o" | undefined;

const variants = {
  hidden: { opacity: 0.5, transform: "translate3d(-50%, -50%, 0) scale(0.5)" },
  visible: { opacity: 1, transform: "translate3d(-50%, -50%, 0) scale(1)" }
};
const Shape = styled(motion.img).attrs(() => ({
  initial: "hidden",
  variants
}))`
  height: 60px;
  width: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
`;

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
      {value === "o" ? (
        <Shape animate="visible" src={circle} />
      ) : value ? (
        <Shape animate="visible" src={cross} />
      ) : null}
    </CellWrapper>
  );
};
