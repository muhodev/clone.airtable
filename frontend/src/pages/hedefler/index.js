import React, { Fragment, useState, useMemo, useCallback } from 'react'
import Table from '../../components/Table'

function Hedefler(props) {
    const data = useMemo(
        () => [
            {
                sno: 1,
                agent: 'A kişisi',
                takim: 'Digitürk İcra Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "Anapara",
                hedefDegeri: "₺110.000"
            },
            {
                sno: 2,
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "Vekalet Ücreti",
                hedefDegeri: "₺12.706"
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
                Header: 'Agent',
                accessor: 'agent',
                sortType: "basic"
            },
            {
                Header: 'Takım',
                accessor: 'takim',
                sortType: "basic"
            },
            {
                Header: "Ay",
                accessor: "ay",
                sortType: "basic",
            },
            {
                Header: "Kategori",
                accessor: "hedefKategorisi",
                sortType: "basic"
            },
            {
                Header: "Hedef Değeri",
                accessor: "hedefDegeri",
                sortType: "basic"
            }
        ],
        []
    )
    return (
        <Fragment>
            <Table
                filterable
                creatable
                title="Hedefler"
                scopeTitle="Hedef"
                columns={columns}
                data={data}
                path="/hedefler"
            />
        </Fragment>
    )
}

export default Hedefler