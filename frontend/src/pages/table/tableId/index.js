import React, { useState } from 'react'
import { Table } from '@/components'
import TableContext from "@/context/tableContext"

function SpaceId(props) {
    const [data, setData] = useState(
        [
            {
                agent: 'A kişisi',
                takim: 'Digitürk İcra Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "anapara",
                hedefDegeri: "₺110.000"

            }
        ]
    )

    const [columns, setColumns] = useState(
        [
            {
                Header: 'Agent',
                accessor: 'agent',
                sortType: "basic",
                type: "linkRecord"
            },
            {
                Header: 'Takım',
                accessor: 'takim',
                sortType: "basic",
                type: "linkRecord"
            },
            {
                Header: "Ay",
                accessor: "ay",
                sortType: "basic",
                type: "date",
            },
            {
                Header: "Kategori",
                accessor: "hedefKategorisi",
                sortType: "basic",
                type: "select",
                options: { anapara: { id: "anapara", value: "Anapara", color: "yellow" }, vekaletUcreti: { id: "vekaletUcreti", value: "Vekalet Ücreti", color: "pink" } }
            },
            {
                Header: "Hedef Değeri",
                accessor: "hedefDegeri",
                sortType: "basic",
                type: "text"
            }
        ]
    )

    const addColumn = column => {
        const copyColumns = [...columns]
        copyColumns.push(column)
        setColumns(copyColumns)
    }
    return (
        <TableContext.Provider value={{ data, columns, addColumn }}>
            <Table
                filterable
                creatable
                title="Hedefler"
                scopeTitle="Hedef"
                data={data}
                path="/hedefler"
            />

        </TableContext.Provider>
    )
}

export default SpaceId