import React from 'react'
import { Cell, CheckboxCell } from "./Components"
import { Wrapper } from "./style"

import TableContext from "@/context/tableContext"

function Columns({ columns }) {
    return (
        <TableContext.Consumer>
            {
                ({ columns, addColumn }) => (
                    <Wrapper>
                        <CheckboxCell />
                        {
                            columns.map((column, index) => (
                                <Cell key={index} column={column} />
                            ))
                        }
                        <button onClick={() => addColumn({ Header: "Deneme", accessor: "deneme", type: "text" })}>
                            Add column
                        </button>
                    </Wrapper>

                )
            }
        </TableContext.Consumer>
    )
}

export default Columns
