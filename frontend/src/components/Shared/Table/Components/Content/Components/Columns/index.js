import React from 'react'
import CheckboxCell from "./CheckboxCell"
import ColumnCell from "./ColumnCell"

import { Wrapper } from "./style"

import TableContext from "@/context/tableContext"
import AddColumnCell from './AddColumnCell'

function Columns({ columns }) {
    return (
        <TableContext.Consumer>
            {
                ({ columns }) => (

                    <Wrapper>
                        <CheckboxCell />
                        {
                            columns.map((column, index) => (
                                <ColumnCell key={index} column={column} />
                            ))
                        }

                        <AddColumnCell />
                    </Wrapper>

                )
            }
        </TableContext.Consumer>
    )
}

export default Columns
