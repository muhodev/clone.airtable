import React, { Fragment, useState, useMemo, useCallback } from 'react'
import Table from '../../components/Table'

function Hedefler(props) {
    const data = useMemo(
        () => [
            {
                agent: 'A kişisi',
                takim: 'Digitürk İcra Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "Anapara",
                hedefDegeri: "₺110.000",
                deneme: "deneme",

            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "Vekalet Ücreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "Vekalet Ücreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "Vekalet Ücreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "Vekalet Ücreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "Vekalet Ücreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "Vekalet Ücreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "Vekalet Ücreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "Vekalet Ücreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "Vekalet Ücreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "Vekalet Ücreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "Vekalet Ücreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "Vekalet Ücreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "Vekalet Ücreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "Vekalet Ücreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "Vekalet Ücreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "Vekalet Ücreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "Vekalet Ücreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            }
        ],
        []
    )

    const columns = useMemo(
        () => [
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
            },
            {
                Header: "Deneme",
                accessor: "deneme",
                sortType: "basic"
            },
            {
                Header: "Deneme",
                accessor: "deneme",
                sortType: "basic"
            },
            {
                Header: "Deneme",
                accessor: "deneme",
                sortType: "basic"
            },
            {
                Header: "Deneme",
                accessor: "deneme",
                sortType: "basic"
            },
            {
                Header: "Deneme",
                accessor: "deneme",
                sortType: "basic"
            },
            {
                Header: "Deneme",
                accessor: "deneme",
                sortType: "basic"
            },
            {
                Header: "Deneme",
                accessor: "deneme",
                sortType: "basic"
            },
            {
                Header: "Deneme",
                accessor: "deneme",
                sortType: "basic"
            },
            {
                Header: "Deneme",
                accessor: "deneme",
                sortType: "basic"
            },
            {
                Header: "Deneme",
                accessor: "deneme",
                sortType: "basic"
            },
            {
                Header: "Deneme",
                accessor: "deneme",
                sortType: "basic"
            },
            {
                Header: "Deneme",
                accessor: "deneme",
                sortType: "basic"
            },
            {
                Header: "Deneme",
                accessor: "deneme",
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