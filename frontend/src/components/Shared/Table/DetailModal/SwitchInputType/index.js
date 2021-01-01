import React, { useState } from "react";
import { Label } from "../style";
import { Icon } from "@/components";
import {
  FieldDateIcon,
  FieldTextIcon,
  FieldSelectIcon,
  FieldLinkRecordIcon,
} from "@/components/Icons";

import TableContext from "@/context/tableContext";

function useTable() {
  const context = useContext(TableContext);
}

function CellRender(props) {
  return (
    <div className="cell">
      <CellLabelRender />
      <CellInputRender />
    </div>
  );
}

function CellLabelRender(props) {
  return (
    <div className="cell-label">
      <CellTextLabelRender />
      <CellDateLabelRender />
      <CellLinkRecordLabelRender />
    </div>
  );
}

function CellInputRender(props) {
  return (
    <div className="cell-input">
      <CellTextInputRender />
      <CellDateInputRender />
      <CellLinkRecordInputRender />
    </div>
  );
}

function CellTextInputRender(props) {
  return <input />;
}

function CellDateInputRender(props) {
  return <div>date</div>;
}

function CellLinkRecordInputRender(props) {
  return <div>link record</div>;
}

const ADD_ROW = "ADD_ROW";
const ADD_COL = "ADD_COL";

function tableReducer(state, action) {
  switch (action.type) {
    case ADD_ROW:
      return;
    case ADD_COL:
      return;
    default:
      state;
  }
}
