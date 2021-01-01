import React from "react";
import CheckboxCell from "./CheckboxCell";
import ColumnCell from "./ColumnCell";

import { Wrapper } from "./style";

import { useTable } from "@/context";
import AddColumnCell from "./AddColumnCell";

function Columns() {
  const { columns } = useTable();
  console.log(columns);
  return (
    <Wrapper>
      <CheckboxCell />
      {columns.map((column, index) => (
        <ColumnCell key={index} column={column} />
      ))}

      <AddColumnCell />
    </Wrapper>
  );
}

export default Columns;
