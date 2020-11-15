import React, { useMemo } from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'

const TableEl = styled.table`
    background-color: #fff;
    border-radius: 4px;
    width: 100%;
    min-height: 100px;
    border: 1px solid #eee;
`

function Table() {
    const data = useMemo(
        () => [
            {
                col1: 'Hello',
                col2: 'World',
            },
            {
                col1: 'react-table',
                col2: 'rocks',
            },
            {
                col1: 'whatever',
                col2: 'you want',
            },
        ],
        []
    )

    const columns = useMemo(
        () => [
            {
                Header: 'Column 1',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Column 2',
                accessor: 'col2',
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        <TableEl {...getTableProps()}>
            <thead>
                {headerGroups.map(({ getHeaderGroupProps, headers }) => (
                    <tr
                        {...getHeaderGroupProps()}
                    >
                        {
                            headers.map(({ render, getHeaderProps }) => (
                                <th
                                    {...getHeaderProps()}
                                >
                                    {render('Header')}
                                </th>
                            ))
                        }
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        {...cell.getCellProps()}

                                    >
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </TableEl>
    )
}

export default Table