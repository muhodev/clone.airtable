import { useContext } from "react";
import TableContext from "./";

function useTable() {
  const tableContext = useContext(TableContext);
  if (!tableContext) throw new Error("Böyle bir context bulunamadı");

  return tableContext;
}

export default useTable;
