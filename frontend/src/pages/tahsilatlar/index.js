import React, { Fragment, useState, useMemo } from 'react'
import Table from '../../components/Table'
import Filter from '../../components/Filter'
import TableHeader from '../../components/Table/TableHeader'

function Tahsilatlar(props) {
    const [isOpenFilterModal, setOpenFilterModal] = useState(false)
    const [addNewModal, setAddNewModal] = useState(false)

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

    return (
        <Fragment>
            <Filter isActive={isOpenFilterModal} closeModal={setOpenFilterModal.bind(this, false)} />

            <TableHeader
                addNew={setAddNewModal.bind(this, true)}
                title="Tahsilatlar"
                openFilter={setOpenFilterModal.bind(this, true)}
                scopeTitle="Tahsilat"
            />
            <Table columns={columns} data={data} />
        </Fragment>
    )
}

export default Tahsilatlar