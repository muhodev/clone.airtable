export const SET_COLS = "SET_COLS";
export const ADD_COL = "ADD_COL";
export const REMOVE_COL = "REMOVE_COL";
export const UPDATE_COL = "UPDATE_COL";
export const GET_ALL_COLS = "GET_ALL_COLS";
export const GET_COL_BY_ID = "GET_COL_BY_ID";

export const SET_ROWS = "SET_ROWS";
export const ADD_ROW = "ADD_ROW";
export const REMOVE_ROW = "REMOVE_ROW";
export const UPDATE_ROW = "UPDATE_ROW";
export const GET_ALL_ROWS = "GET_ALL_ROWS";
export const GET_ROW_BY_ID = "GET_ROW_BY_ID";

const setColumns = (cols) => {
  return cols;
};

const addColumn = (col, state) => {
  const updatedCols = [...state];
  updatedCols.push(col);
  return updatedCols;
};

const setRows = (rows) => {
  return rows;
};

const addRow = (row, state) => {
  const updatedRows = [...state];
  updatedRows.push(row);
  return updatedRows;
};

export const tableColumnsReducer = (state, action) => {
  switch (action.type) {
    case SET_COLS:
      return setColumns(action.cols);
    case ADD_COL:
      return addColumn(action.col, state);
    default:
      return state;
  }
};

export const tableRowsReducer = (state, action) => {
  switch (action.type) {
    case SET_ROWS:
      return setRows(action.rows);
    case ADD_ROW:
      return addRow(action.row, state);
    default:
      return state;
  }
};
