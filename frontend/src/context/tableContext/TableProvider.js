import React, { useEffect, useReducer } from "react";

import TableContext from "./index.js";
import {
  ADD_ROW,
  ADD_COL,
  SET_COLS,
  SET_ROWS,
  tableColumnsReducer,
  tableRowsReducer,
} from "./reducer";

function TableProvider(props) {
  const [columns, dispatchCols] = useReducer(tableColumnsReducer, []);

  const [rows, dispatchRows] = useReducer(tableRowsReducer, []);

  const addCol = (col) => {
    dispatchCols({ type: ADD_COL, col });
  };

  const addRow = (row) => {
    dispatchRows({ type: ADD_ROW, row });
  };

  const setRows = (rows) => {
    dispatchRows({ type: SET_ROWS, rows });
  };

  const setColumns = (cols) => {
    dispatchCols({ type: SET_COLS, cols });
  };

  useEffect(() => {
    setColumns([
      {
        id: "col1",
        name: "Title",
        type: "primary",
        options: null,
        width: "150px",
      },
      {
        id: "col2",
        name: "Deneme",
        type: "text",
        options: null,
        width: "150px",
      },
    ]);
  }, []);

  return (
    <TableContext.Provider
      value={{ setColumns, columns, addCol, rows, addRow, setRows }}
    >
      {props.children}
    </TableContext.Provider>
  );
}

export default TableProvider;
