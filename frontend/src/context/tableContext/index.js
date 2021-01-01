import { createContext } from "react";

export default createContext({
  data: [],
  columns: [],
  addColumn: () => {},
});

export { default as TableProvider } from "./TableProvider";
