import React, { Fragment, useState } from 'react'
import { Box, Text, Icon } from "@/components"
import TableContext from "@/context/tableContext"
import { Row, Cell } from ".."
import { CellWrapper, CellCheckbox } from "../Cell/style"
import { ModalExpandIcon } from "./style"
import { PlusIcon } from "@/components/Icons"
import CategoryCellLabel from "./CategoryCellLabel"

function Rows() {

    const [selectedCell, setSelectedCell] = useState("null,null")  // "colIndex,rowIndex"

    return (
        <TableContext.Consumer>
            {({ data, columns }) => (
                <Fragment>
                    { data.map((cell, rowIndex) => (
                        <Row key={rowIndex}>
                            <Cell style={{ width: "50px" }}>
                                <CellCheckbox
                                    active={selectedCell.split(",")[1] == rowIndex}
                                >
                                    {console.log(selectedCell.split(",")[1], rowIndex)}
                                    <div className="cell-checkbox-hover">
                                        <input type="checkbox" />
                                        <ModalExpandIcon />
                                    </div>
                                    <Text fontSize="13px">
                                        {rowIndex + 1}
                                    </Text>
                                </CellCheckbox>
                            </Cell>
                            { columns.map((col, colIndex) => (
                                <Cell key={colIndex}>
                                    <CellWrapper onClick={setSelectedCell.bind(this, `${colIndex},${rowIndex}`)}
                                        selected={`${colIndex},${rowIndex}` === selectedCell}
                                    >
                                        <Box pl={2}>
                                            {
                                                col.type === "select" ?
                                                    <CategoryCellLabel
                                                        options={col.options}
                                                        valueId={cell[col.accessor]}
                                                    />

                                                    :
                                                    <Text fontSize="13px">
                                                        {
                                                            cell[col.accessor]
                                                        }
                                                    </Text>
                                            }
                                        </Box>
                                    </CellWrapper>
                                </Cell>
                            ))}
                        </Row>
                    ))}
                    <Row>
                        <Cell style={{ width: "50px" }}>
                            <Icon fontSize="14px" pl={2}>
                                <PlusIcon />
                            </Icon>
                        </Cell>
                        {
                            columns.map(() => (
                                <Cell>

                                </Cell>
                            ))
                        }
                    </Row>
                </Fragment>

            )}
        </TableContext.Consumer>
    )
}

export default Rows