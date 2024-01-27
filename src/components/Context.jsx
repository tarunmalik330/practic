import React, { useContext } from "react";
import { Datatransfer } from "../Pages/Khushi";

const Context = () => {
  const { someName, subsNum } = useContext(Datatransfer);
  console.log(someName(4, 6), subsNum(1, 4));
  return <div></div>;
};

export default Context;
