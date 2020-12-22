import React from 'react'
import { Box } from "@/components"
import TableContext from "@/context/tableContext"
import { Row } from ".."

function Rows() {
    return (
        <TableContext.Consumer>
            {({ data, columns }) => (
                <Box>
                    {
                        data.map((cell, index) => (
                            <Row
                                key={index}
                                columns={columns}
                                data={cell}
                                index={index + 1}
                            />
                        ))
                    }
                </Box>
            )}
        </TableContext.Consumer>
    )
}

export default Rows