import React, { Fragment, useMemo } from 'react'
import { Header } from '../../../components'
import Table from '../../../components/Table'

function SpaceId(props) {
    const data = useMemo(
        () => [
            {
                agent: 'A kişisi',
                takim: 'Digitürk İcra Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "anapara",
                hedefDegeri: "₺110.000",
                deneme: "deneme",

            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "vekaletUcreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "vekaletUcreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "vekaletUcreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "vekaletUcreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "vekaletUcreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "vekaletUcreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "vekaletUcreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "vekaletUcreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "vekaletUcreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "vekaletUcreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "vekaletUcreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "vekaletUcreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "vekaletUcreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "vekaletUcreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "vekaletUcreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "vekaletUcreti",
                hedefDegeri: "₺12.706",
                deneme: "deneme",
            },
            {
                agent: 'A kişisi',
                takim: 'Digitürk Devir Takımı',
                ay: "Aralık 2020",
                hedefKategorisi: "vekaletUcreti",
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
                type: "date"
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
            <Header />
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

export default SpaceId