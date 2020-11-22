import React, { Fragment, useState, useMemo, useCallback } from 'react'
import Filter from "../../components/Filter"
import Table from '../../components/Table'
import TableHeader from '../../components/Table/TableHeader'
import YeniHedefModal from '../../components/YeniHedefModal'


function Hedefler(props) {
    const [isOpenFilterModal, setOpenFilterModal] = useState(false)
    const [addNewModal, setAddNewModal] = useState(false)

    const toggleFilterModalHandler = useCallback((value) => {
        setOpenFilterModal(value)
    }, [])

    const toggleAddNewModalHandler = useCallback((value) => {
        setAddNewModal(value)
    }, [])

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

            <Filter
                isActive={isOpenFilterModal}
                closeModal={toggleFilterModalHandler.bind(this, false)}
            />

            <YeniHedefModal
                isActive={addNewModal}
                closeModal={toggleAddNewModalHandler.bind(this, false)}
                scopeTitle="Hedef"
            />

            <TableHeader
                addNew={toggleAddNewModalHandler.bind(this, true)}
                title="Hedefler"
                openFilter={toggleFilterModalHandler.bind(this, true)}
                scopeTitle="Hedef"
            />
            <Table columns={columns} data={data} />

        </Fragment>
    )
}

export default Hedefler