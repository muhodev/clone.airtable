import React from "react";
import CheckboxCell from "./CheckboxCell";
import ColumnCell from "./ColumnCell";

import { Wrapper } from "./style";

import { TableContext } from "@/context";
import AddColumnCell from "./AddColumnCell";

function Columns() {
  return (
    <TableContext.Consumer>
      {({ columns }) => (
        <Wrapper>
          <CheckboxCell />
          {columns.map((column, index) => (
            <ColumnCell key={index} column={column} />
          ))}

          <AddColumnCell />
        </Wrapper>
      )}
    </TableContext.Consumer>
  );
}

export default Columns;
