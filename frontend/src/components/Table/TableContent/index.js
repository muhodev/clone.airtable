import React from 'react'
import styled from 'styled-components'
import Table from '..'
import Flex from '../../Flex'

const TableWrapper = styled.div`
    font-size: 13px;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
`
const TableContainer = styled.div`

`

const TableCell = styled.div`
    border-right: 1px solid #eee;
    background: #fff;
    padding: 10px 18px;
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
    ${TableCell} {
        background-color: #f5f5f5;
    }
    position: sticky;
    top: 0;
`

const TableRow = styled(Flex)`
    border-bottom: 1px solid #dde1e3;
    display: flex;
    flex-shrink: 0;
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
                                {col.Header}
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
                            return <TableCell key={ind}>{row[col.accessor]}</TableCell>
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