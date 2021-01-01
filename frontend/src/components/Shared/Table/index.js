import React, { useState } from "react";
import Actions from "./Actions";
import { useTable } from "@/context";
import { FieldTextIcon, ExpandIcon, PlusIcon } from "@/components/Icons";
import "./style.css";

const icons = {
  text: <FieldTextIcon />,
  primary: <FieldTextIcon />,
};

function Table(props) {
  return (
    <>
      <Actions />
      <div className="t-table__scrollable">
        <div className="t-table__content">
          <TableColumnsRender />
          <TableRowsRender />
        </div>
      </div>
    </>
  );
}

function TableColumnsRender() {
  const { columns } = useTable();

  return (
    <div className="t-table__columns">
      <TableColumnCheckbox />
      {columns.length !== 0 &&
        columns.map((column, columnIndex) => (
          <TableColumnRender column={column} key={columnIndex} />
        ))}
      <TableAddColumnRender />
    </div>
  );
}

function TableRowsRender() {
  const { rows, columns } = useTable();
  const [selectedIndexes, setSelectedIndexes] = useState([null, null]);

  const isSelectedCell = (colInd, rowInd) => {
    return colInd === selectedIndexes[0] && rowInd === selectedIndexes[1];
  };

  return (
    <div className="t-table__rows">
      {rows.length !== 0 &&
        rows.map((row, rowIndex) => {
          return (
            <div
              className={`t-table__row ${
                selectedIndexes[1] === rowIndex
                  ? "t-table__row-cell--selected"
                  : ""
              }`}
            >
              <TableRowCheckbox index={rowIndex} />
              {columns.map((col, colIndex) => (
                <TableRowCellRender
                  key={colIndex}
                  col={col}
                  row={row}
                  isSelectedCell={isSelectedCell(colIndex, rowIndex)}
                  onSelectedCell={setSelectedIndexes.bind(this, [
                    colIndex,
                    rowIndex,
                  ])}
                />
              ))}
            </div>
          );
        })}
      <TableAddRowRender />
    </div>
  );
}

function TableRowCheckbox({ index }) {
  return (
    <div className="t-table__row-cell t-table__cell">
      <div className="t-table__cell-value">
        <span>{index + 1}</span>
        {/* <input type="checkbox" /> */}
      </div>
    </div>
  );
}

function TableRowCellRender({ col, row, onSelectedCell, isSelectedCell }) {
  return (
    <div
      className="t-table__cell t-table__row-cell"
      style={{ width: col.width || null }}
      onClick={onSelectedCell}
    >
      <div
        className={`t-table__cell-value ${
          isSelectedCell ? "t-table__cell--selected" : ""
        }`}
      ></div>
      {row[col]}
    </div>
  );
}

function TableAddRowRender() {
  const { addRow, columns } = useTable();

  const addRowToTable = () => {
    addRow({ id: "row", dataByColumnId: {} });
  };

  return (
    <div className="t-table__row" onClick={addRowToTable.bind(this)}>
      <div className="t-table__cell t-table__row-cell">
        <div className="t-table__cell-value  justify-center">
          <div className="icon icon--md">
            <PlusIcon />
          </div>
        </div>
      </div>

      {columns.map((col, index) => (
        <div
          key={index}
          className="t-table__cell t-table__row-cell"
          style={{ width: col.width || null }}
        />
      ))}
    </div>
  );
}

function TableColumnCheckbox() {
  return (
    <div className="t-table__column t-table__cell">
      <div className="t-table__cell-value">
        <input type="checkbox" />
      </div>
    </div>
  );
}

function TableAddColumnRender() {
  const { addCol } = useTable();

  const addColumnToTable = () => {
    addCol({ id: "col4", name: "Deneme2", type: "text", width: "150px" });
  };

  return (
    <div
      className="t-table__column t-table__cell"
      onClick={addColumnToTable.bind(this)}
    >
      <div className="t-table__cell-value justify-center">
        <div className="icon icon--md">
          <PlusIcon />
        </div>
      </div>
    </div>
  );
}

function TableColumnRender({ column }) {
  return (
    <div
      className="t-table__column t-table__cell"
      style={{ width: column.width || null }}
    >
      <div className="t-table__cell-value">
        <TableColumnLabelRender column={column} />
      </div>
    </div>
  );
}

function TableColumnLabelRender({ column }) {
  return (
    <div className="t-table__column-label">
      <div className="d-flex align-end">
        <div className="icon icon--opac icon--md">{icons[column.type]}</div>
        <div className="t-table__column-label--title">{column.name}</div>
      </div>
      <div className="icon icon--xs icon--opac">
        <ExpandIcon />
      </div>
    </div>
  );
}

export default Table;
