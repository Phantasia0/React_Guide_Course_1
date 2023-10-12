import React from "react";
import useCounter from "../hooks/use-counter";

import Card from "./Card";

const BackwardCounter = (props) => {
  const counter = useCounter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
