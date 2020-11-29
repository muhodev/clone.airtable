import React, { useState, useMemo, Fragment, useEffect } from 'react'
import instance from '../../axios'
import Table from '../../components/Table'

const cachedData = {}

function Kullanicilar(props) {
    let [data, setData] = useState([])
    useEffect(async () => {
        const url = "/users"

        try {
            if (cachedData[url]) {
                setData(cachedData[url])
            } else {
                const dataUsers = await instance.get("/users")
                const tableUsers = dataUsers.data.data.users.map((user, index) => ({ sno: index + 1, email: user.email, displayName: `${user.name} ${user.surname}`, role: user.role }))
                setData(tableUsers)
                cachedData[url] = tableUsers
            }
        } catch (error) {
            console.log(error)
        }
    }, [])


    const columns = useMemo(
        () => [
            {
                Header: "S.no",
                accessor: "sno",
                fieldType: "text",
                sortType: "basic"
            },
            {
                Header: 'Agent',
                accessor: 'displayName',
                fieldType: "text",
                sortType: "basic"
            },
            {
                Header: 'Email',
                accessor: 'email',
                fieldType: "text",
                sortType: "basic"
            },
            {
                Header: "Rol",
                accessor: "role",
                fieldType: "text",
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