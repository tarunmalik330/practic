import { createContext } from "react";

export const Datatransfer = createContext();

export default function DataHelp({ children }) {
  function someName(num1, num2) {
    var a = num1 + num2;
    return a;
  }
  function subsNum(number1, number2) {
    var b = number1 - number2;
    return b;
  }
  const value = { someName, subsNum };
  return (
    <Datatransfer.Provider value={value}>{children}</Datatransfer.Provider>
  );
}
