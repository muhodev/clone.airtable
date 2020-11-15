import React, { useMemo } from 'react'
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

function Table() {
    const data = useMemo(
        () => [
            {
                sno: 1,
                kurum: 'Digital Platform',
                altKurum: 'İcra',
                alan: "Bölgesel",
                tahsilatiYapan: "A kişisi",
                tarih: "15.11.2020",
                hedefKategorisi: "Anapara",
                tutar: "₺10.000"
            },
            {
                sno: 2,
                kurum: 'Digital Platform',
                altKurum: 'İcra',
                alan: "Bölgesel",
                tahsilatiYapan: "A kişisi",
                tarih: "15.11.2020",
                hedefKategorisi: "Vekalet Ücreti",
                tutar: "₺1.706"
            },
            {
                sno: 3,
                kurum: 'Digital Platform',
                altKurum: 'Devir',
                alan: "Bölgesel",
                tahsilatiYapan: "A kişisi",
                tarih: "15.11.2020",
                hedefKategorisi: "Dosya Kapama",
                tutar: "✔"
            },
            {
                sno: 4,
                kurum: "İş Bankası",
                altKurum: "İcra",
                alan: "TÜrkiye Geneli",
                tahsilatiYapan: "A kişisi",
                tarih: "15.11.2020",
                hedefKategorisi: "Dosya Kapama",
                tutar: "✔"
            },
            {
                sno: 5,
                kurum: "İş Bankası",
                altKurum: "İcra",
                alan: "TÜrkiye Geneli",
                tahsilatiYapan: "A kişisi",
                tarih: "15.11.2020",
                hedefKategorisi: "Anapara",
                tutar: "₺24.350"
            }
        ],
        []
    )

    const columns = useMemo(
        () => [
            {
                Header: "S.no",
                accessor: "sno",
                sortType: "basic"
            },
            {
                Header: 'Kurum',
                accessor: 'kurum',
                sortType: "basic"
            },
            {
                Header: 'Alt Kurum',
                accessor: 'altKurum',
                sortType: "basic"
            },
            {
                Header: "Alan",
                accessor: "alan",
                sortType: "basic",
            },
            {
                Header: "Tahsilatı Yapan",
                accessor: "tahsilatiYapan",
                sortType: "basic"
            },
            {
                Header: "Tarih",
                accessor: "tarih",
                sortType: "basic"
            },
            {
                Header: "Kategori",
                accessor: "hedefKategorisi",
                sortType: "basic"
            },
            {
                Header: "Değer",
                accessor: "tutar",
                sortType: "basic"
            }
        ],
        []
    )

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

export default Table