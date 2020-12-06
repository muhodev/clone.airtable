import React, { useState } from 'react'
import styled from 'styled-components'
import Table from '..'
import Flex from '../../Flex'
import { ReactComponent as FieldTextIcon } from "../../Icons/FieldText.svg"
import { ReactComponent as ExpandIcon } from "../../Icons/Expand.svg"
import { ReactComponent as FieldSelectIcon } from "../../Icons/FieldSelect.svg"
import { ReactComponent as FieldDateIcon } from "../../Icons/FieldDate.svg"
import { ReactComponent as ExpandFullIcon } from "../../Icons/ExpandFull.svg"
import TableModal from '../TableModal'
import useDoubleClick from '../useDoubleClick'

const colors = { yellow: { background: "#ffeab6", color: "#37352f" }, blue: { background: "#2d7ff9", color: "#fff" }, pink: { background: "#ffdce5", color: "#4c0c1c" } }


const TableWrapper = styled.div`
    font-size: 13px;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
`
const TableContainer = styled.div`

`

const TableCell = styled.div`
    user-select: none;
    cursor: default;
    display: flex;
    align-items: center;
    border-right: 1px solid #eee;
    background: #fff;
    ${props => props.width ? `
        min-width: ${props.width};
    `: `
        min-width: 180px;
    `}
    
`
const TableCellInput = styled.div`
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    color: inherit !important;
    padding: 10px 16px;
    input {
        cursor: default;
        width: 100%;
        height: 100%;
        border: 0 !important;
        outline: 0 !important;
        font-size: inherit !important;
        padding: 0;
        margin: 0;
        color: inherit !important;
        line-height: inherit !important;
        letter-spacing: inherit !important;
        font: inherit !important;

        &:focus {
            cursor: text;
        }
    }

`
const TableCellSpan = styled(Flex)`
    align-items: center;
    padding: 10px 16px;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-radius: 4px;
    position: relative;

    ${props => props.selected && `
        border-color: #1283da;
        ${TableCellInput} {
            display: flex;
        }
    `}
`


const TableHeader = styled.div`
    background-color: #f5f5f5;
    border-top: 2px solid #ddd;
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-shrink: 0;
    font-weight: 500;
    color: #4d4d4d;
    line-height: 1;
    position: sticky;
    top: 0;
    user-select: none;
    z-index: 999;

    ${TableCell} {
        position: relative;
        background-color: #f5f5f5;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    
`
const TableHeaderField = styled(Flex)`
    align-items: flex-end;

    svg {
        color: #949494;
        margin-right: 4px;
        font-size: 14px;
    }
`
const ResizeColDrag = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background: transparent;
    top: 2px;
    bottom: 2px;
    right: -5px;
    width: 10px;
    z-index: 99;
    opacity: 0;
    cursor: ew-resize;
    &:hover {
        opacity: 1;
        visibility: visible;
    }

    span {
        width: 3px;
        background: #1283da;
        height: 100%;
        
    }
`

const TableHeaderExpand = styled(Flex)`
    svg {
        opacity: .25;
        font-size: 12px;
    }

`

const ExpandFull = styled(Flex)`
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    display: ${props => props.active ? "flex" : "none"} !important;
    &:hover {
        background: #d0f0fd;
    }
    width: 24px;
    height: 24px;
    svg {
        font-size: 12px;
        color: #1283da;
    }
`

const TableRow = styled(Flex)`
    border-bottom: 1px solid #dde1e3;
    display: flex;
    flex-shrink: 0;

    &:hover {
        ${ExpandFull} {
            display: flex !important;
        }
    }
`

const FirstCell = styled(Flex)`
    padding-left: 16px;
`

FirstCell.defaultProps = {
    alignItems: "center",
    justifyContent: "space-between",
    flexAuto: true
}


const Truncate = styled.div`
    align-items: center;
    font-size: 12px;
    line-height: 1;
    display: inline-flex;
    padding: 4px 6px;
    border-radius: 9999px;
    ${props => props.variant && `
        background-color: ${colors[props.variant].background};
        color: ${colors[props.variant].color};
    `}
`



function TableContent({ data, columns }) {
    const [selectedCell, setSelectedCell] = useState(`null,null`)
    const [isActiveModal, setActiveModal] = useState(false)
    const [isEdit, setEdit] = useState(true)
    const [modalPayload, setModalPayload] = useState({})

    const [refCallback, elem] = useDoubleClick(changebackgroundColor);

    function changebackgroundColor() {
        alert("changed")
    }

    const selectCell = (rowIndex, colIndex) => {
        setSelectedCell(`${rowIndex},${colIndex}`)
    }

    const openModal = (payload) => {
        setEdit(payload.isEdit)
        setModalPayload({ ...payload })
        setActiveModal(true)
    }
    const closeModal = () => {
        setActiveModal(false)
    }

    return (
        <TableWrapper>
            <TableModal
                closeModal={closeModal.bind(this)}
                isActive={isActiveModal}
                payload={modalPayload}
            />
            <TableHeader>
                <TableRow>
                    <TableCell width="66px">
                        <FirstCell
                        >
                            <input type="checkbox" />
                        </FirstCell>
                    </TableCell>
                    {
                        columns.map((col, index) =>
                            <TableCell key={index}
                            >
                                <TableCellSpan justifyContent="space-between">
                                    <TableHeaderField>
                                        {
                                            col.type === "select" ? <FieldSelectIcon /> :
                                                col.type === "date" ? <FieldDateIcon /> :
                                                    <FieldTextIcon />

                                        }

                                        <span>
                                            {col.Header}
                                        </span>
                                        <ResizeColDrag>
                                            <span></span>
                                        </ResizeColDrag>
                                    </TableHeaderField>
                                    <TableHeaderExpand>
                                        <ExpandIcon />
                                    </TableHeaderExpand>
                                </TableCellSpan>
                            </TableCell>
                        )
                    }
                </TableRow>
            </TableHeader>
            {
                data.map((row, index) => {
                    return <TableRow key={index}>
                        <TableCell width="66px">
                            <FirstCell>
                                <span
                                >
                                    {index + 1}
                                </span>
                                <ExpandFull
                                    onClick={openModal.bind(this, { isEdit: true, row, col: columns })}
                                    active={+selectedCell.split(',')[0] === index}
                                >
                                    <ExpandFullIcon />
                                </ExpandFull>
                            </FirstCell>
                        </TableCell>
                        {columns.map((col, ind) => {

                            return <TableCell
                                key={ind}
                                onClick={selectCell.bind(this, index, ind)}>

                                {col.type === "select"
                                    ?
                                    <TableCellSpan

                                        selected={`${index},${ind}` === selectedCell}
                                    >
                                        <Truncate variant={col.options[row[col.accessor]].color}>
                                            {col.options[row[col.accessor]].value}
                                        </Truncate>
                                    </TableCellSpan>
                                    :
                                    <TableCellSpan
                                        selected={`${index},${ind}` === selectedCell}
                                    >
                                        <TableCellInput>
                                            <input defaultValue={row[col.accessor]} />
                                        </TableCellInput>
                                        <span>{row[col.accessor]}</span>
                                    </TableCellSpan>
                                }
                            </TableCell>
                        }
                        )}

                    </TableRow>
                }
                )
            }
        </TableWrapper>
    )
}

export default TableContent