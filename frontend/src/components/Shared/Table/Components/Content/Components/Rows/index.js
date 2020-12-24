import React, { Fragment, useState } from 'react'
import { Box, Text, Icon } from "@/components"
import TableContext from "@/context/tableContext"
import { Row, Cell } from ".."
import { CellWrapper, CellCheckbox } from "../Cell/style"
import { ModalExpandIcon } from "./style"
import { PlusIcon } from "@/components/Icons"
import SwitchCell from './SwitchCell'
import DetailModal from "../DetailModal"

function Rows() {

    const [selectedCell, setSelectedCell] = useState("null,null")  // "colIndex,rowIndex"

    const [isOpenDetailModal, setOpenDetailModal] = useState(false);

    return (
        <TableContext.Consumer>
            {({ data, columns }) => (
                <Fragment>
                    { data.map((cell, rowIndex) => (
                        <Row key={rowIndex}>
                            <Cell style={{ width: "50px" }}>
                                <CellCheckbox
                                    onClick={setOpenDetailModal.bind(this, true)}
                                    active={selectedCell.split(",")[1] == rowIndex}
                                >
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
                                            <SwitchCell
                                                col={col}
                                                value={cell[col.accessor]}
                                            />
                                        </Box>
                                    </CellWrapper>
                                </Cell>
                            ))}
                            {
                                isOpenDetailModal &&
                                <DetailModal
                                    closeModal={setOpenDetailModal.bind(this, false)}
                                    columns={columns}
                                    data={cell} />
                            }
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