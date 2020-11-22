import React, { memo } from 'react'
import styled from 'styled-components'
import { useTable, useSortBy, useFilters } from 'react-table'

const TableEl = styled.table`
    background-color: #fff;
    border-radius: 4px;
    width: 100%;
    min-height: 100px;
    border: 1px solid #d2d2d2;
    border-spacing: 0;
    border-collapse: separate;
    font-size: 14px;

    tbody {
        tr {
            transition: background-color 200ms;

            &:hover {
                background-color: #eeeef0;
            }
        }
    }
    td {
        padding: 16px 12px;
        border: 0;
    }
    th {
        border-bottom: 1px solid #d2d2d2;
        padding: 16px 12px;
        align-items: center;
        div {
            display: flex;
            align-items: center;
        }

        span {
            user-select: none;
            &.sortable-span {
                min-width: 15px;
                min-height: 22px;
            }
        }
        
    }
`

const TableHead = styled.thead`
    text-align: left;
`

function TableContent({ data, columns }) {
    console.log("rendering table")
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data }, useFilters, useSortBy)

    return (
        <TableEl {...getTableProps()}>
            <TableHead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                <div>

                                    <span>
                                        {column.render('Header')}
                                    </span>
                                    <span className="sortable-span">
                                        {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ' '}
                                    </span>
                                </div>
                            </th>
                        ))}
                    </tr>
                ))}
            </TableHead>
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

export default memo(TableContent)