import React from 'react'
import styled from 'styled-components'
import Table from '..'
import Flex from '../../Flex'
import { ReactComponent as FieldTextIcon } from "../../Icons/FieldText.svg"
import { ReactComponent as ExpandIcon } from "../../Icons/Expand.svg"
import { ReactComponent as FieldSelectIcon } from "../../Icons/FieldSelect.svg"
import { ReactComponent as FieldDateIcon } from "../../Icons/FieldDate.svg"


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
    display: flex;
    align-items: center;
    border-right: 1px solid #eee;
    background: #fff;
    padding: 10px 16px;
    ${props => props.width ? `
        min-width: ${props.width};
    `: `
        min-width: 180px;
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

const TableRow = styled(Flex)`
    border-bottom: 1px solid #dde1e3;
    display: flex;
    flex-shrink: 0;
`

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


    return (
        <TableWrapper>

            <TableHeader>
                <TableRow>
                    <TableCell width="66px">
                        <input type="checkbox" />
                    </TableCell>
                    {
                        columns.map((col, index) =>
                            <TableCell key={index}>
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
                            </TableCell>
                        )
                    }
                </TableRow>
            </TableHeader>
            {
                data.map((row, index) => {
                    return <TableRow key={index}>
                        <TableCell width="66px">
                            {index + 1}
                        </TableCell>
                        {columns.map((col, ind) => {
                            return <TableCell key={ind}>

                                {col.type === "select"
                                    ?
                                    <Truncate variant={col.options[row[col.accessor]].color}>
                                        {col.options[row[col.accessor]].value}
                                    </Truncate>
                                    :
                                    <span>{row[col.accessor]}</span>
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