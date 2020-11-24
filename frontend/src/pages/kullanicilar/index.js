import React, { useState, useMemo, Fragment, useEffect } from 'react'
import instance from '../../axios'
import Table from '../../components/Table'

function Kullanicilar(props) {
    let [data, setData] = useState([])
    useEffect(async () => {
        try {
            const dataUsers = await instance.get("/users")
            const tableUsers = dataUsers.data.data.users.map((user, index) => ({ sno: index + 1, email: user.email, displayName: `${user.name} ${user.surname}`, role: user.role }))
            setData(tableUsers)
        } catch (error) {
            console.log(error)
        }
    }, [])


    const columns = useMemo(
        () => [
            {
                Header: "S.no",
                accessor: "sno",
                sortType: "basic"
            },
            {
                Header: 'Agent',
                accessor: 'displayName',
                sortType: "basic"
            },
            {
                Header: 'Email',
                accessor: 'email',
                sortType: "basic"
            },
            {
                Header: "Rol",
                accessor: "role",
                sortType: "basic",
            }
        ],
        []
    )
    return (
        <Fragment>
            <Table
                filterable
                creatable
                title="Kullanıcılar"
                scopeTitle="Kullanıcı"
                columns={columns}
                data={data}
                path="/kullanıcılar"
            />
        </Fragment>
    )
}

export default Kullanicilar